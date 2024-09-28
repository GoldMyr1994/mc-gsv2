import {
  Button,
  ButtonIcon,
  Input,
  InputField,
  VStack,
  Center,
  Spinner,
  KeyboardAvoidingView,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorText,
  FormControlError,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { SendHorizontal } from "lucide-react-native";
import { useCallback, useState } from "react";

import { pickErrorMessageFromUnknown } from "@/utils";
import { useAuthenticationContext } from "@/context/authentication/hooks";

function ScreenFirebaseAuthLink() {
  const { confirmOtp } = useAuthenticationContext();

  const [isFreeze, setFreeze] = useState(false);
  const [otpCode, setOtpCode] = useState<string>("");
  const [error, setError] = useState("");

  const onChangeOtpCodeText = useCallback((v: string) => {
    setOtpCode(v.replace(/\D/g, ""));
  }, []);

  const handleSubmit = () => {
    async function handle() {
      try {
        setFreeze(true);
        const user = await confirmOtp(otpCode);
        if (user?.user.uid) {
          // void analytics().setUserId(user.user.uid);
          // void crashlytics().setUserId(user.user.uid);
        }
        // void analytics().logEvent("otp_code_verified");
        router.push("/(app)/(drawer)/tours");
      } catch (e) {
        console.log("ERROR: something went wrong verifying otp code", e);
        // void analytics().logEvent("otp_code_error");
        const errorMessage = pickErrorMessageFromUnknown(e);
        setError(errorMessage);
        setFreeze(false);
      }
    }
    void handle();
  };

  return (
    <KeyboardAvoidingView flex={1} justifyContent="center">
      <VStack space="lg" px="$8">
        <FormControl isInvalid={!!error} isDisabled={isFreeze} gap="$2">
          <FormControlLabel>
            <FormControlLabelText>
              Enter the OTP code sent to your phone
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              keyboardType="phone-pad"
              textContentType="oneTimeCode"
              autoFocus
              autoComplete="off"
              placeholder="Enter Text here"
              onChangeText={onChangeOtpCodeText}
            />
          </Input>
          <FormControlError>
            <FormControlErrorText>{error}</FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button isDisabled={!otpCode || isFreeze} onPress={handleSubmit}>
          <ButtonIcon as={SendHorizontal} />
        </Button>
      </VStack>
      {isFreeze && (
        <Center
          position="absolute"
          w="$full"
          h="$full"
          opacity={0.2}
          bg="$black"
        >
          <Spinner size="large" animating={isFreeze} />
        </Center>
      )}
    </KeyboardAvoidingView>
  );
}

export { ScreenFirebaseAuthLink };

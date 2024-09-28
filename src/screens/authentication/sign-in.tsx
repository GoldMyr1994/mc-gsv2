import {
  Button,
  ButtonIcon,
  ButtonText,
  Input,
  InputField,
  KeyboardAvoidingView,
  InputSlot,
  Spinner,
  Center,
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorText,
  FormControlError,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Mail } from "lucide-react-native";
import { useCallback, useState } from "react";

import { FlagIcon } from "@/components/flag-icon";
// import { analytics } from "@/services";
import { pickErrorMessageFromUnknown } from "@/utils";
import { useAuthenticationContext } from "@/context/authentication/hooks";

function ScreenSignIn() {
  const { signIn, setConfirmationResult } = useAuthenticationContext();

  const [isFreeze, setFreeze] = useState(false);
  const [prefix] = useState("+39");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const onChangePhoneNumberText = useCallback((v: string) => {
    setPhoneNumber(v.replace(/\D/g, ""));
  }, []);

  const handleSubmit = () => {
    async function handle() {
      try {
        setFreeze(true);
        const confirmationResult = await signIn({ prefix, phoneNumber });
        setConfirmationResult(confirmationResult);
        // void analytics().logEvent("phone_number_sent");
        router.push("/firebaseauth/link");
      } catch (e) {
        console.log("ERROR: something went wrong sending otp code", e);
        const errorMessage = pickErrorMessageFromUnknown(e);
        setError(errorMessage);
        setFreeze(false);
      }
    }

    void handle();
  };

  return (
    <KeyboardAvoidingView flex={1} justifyContent="center">
      <VStack space="lg" px="$8" justifyContent="center">
        <FormControl isInvalid={!!error} isDisabled={isFreeze} gap="$2">
          <FormControlLabel>
            <FormControlLabelText>Enter your phone number</FormControlLabelText>
          </FormControlLabel>
          <Input isDisabled={isFreeze}>
            <InputSlot>
              <Button disabled gap="$2" borderWidth="$0" pl="$2" pr="$0">
                <FlagIcon name="it" />
                <ButtonText>{prefix}</ButtonText>
              </Button>
            </InputSlot>
            <InputField
              autoFocus
              autoComplete="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              onChangeText={onChangePhoneNumberText}
              value={phoneNumber}
            />
          </Input>
          <FormControlError>
            <FormControlErrorText>{error}</FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button onPress={handleSubmit} isDisabled={!phoneNumber || isFreeze}>
          <ButtonIcon as={Mail} />
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

export { ScreenSignIn };

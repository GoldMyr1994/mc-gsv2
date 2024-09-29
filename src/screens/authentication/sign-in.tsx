import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorText,
  FormControlError,
} from "@/gluestack/components/ui/form-control";

import { VStack } from "@/gluestack/components/ui/vstack";
import { Center } from "@/gluestack/components/ui/center";
import { Spinner } from "@/gluestack/components/ui/spinner";
import { KeyboardAvoidingView } from "@/gluestack/components/ui/keyboard-avoiding-view";
import { Input, InputField, InputSlot } from "@/gluestack/components/ui/input";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/gluestack/components/ui/button";
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
    <KeyboardAvoidingView className="flex-1 justify-center">
      <VStack space="lg" className="px-8 justify-center">
        <FormControl
          isInvalid={!!error}
          isDisabled={isFreeze}
          className="gap-2"
        >
          <FormControlLabel>
            <FormControlLabelText>Enter your phone number</FormControlLabelText>
          </FormControlLabel>
          <Input isDisabled={isFreeze}>
            <InputSlot>
              <Button disabled className="gap-2 border-0 pl-2 pr-0">
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
        <Center className="absolute w-full h-full opacity-20 bg-black">
          <Spinner size="large" animating={isFreeze} />
        </Center>
      )}
    </KeyboardAvoidingView>
  );
}

export { ScreenSignIn };

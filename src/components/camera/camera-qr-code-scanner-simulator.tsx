import {
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { useState } from "react";

function CameraQrCodeScannerSimulator() {
  const [value, setValue] = useState("");

  function handleSubmit() {
    return null;
  }

  return (
    <Center flex={1}>
      <Center gap="$4">
        <Heading>expo-camera</Heading>
        <Heading size="md">not supported in simulator/emulator</Heading>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>
              Enter full url or id to add tour
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              autoFocus
              autoComplete="off"
              placeholder="Enter Text url or id"
              onChangeText={setValue}
              value={value}
            />
          </Input>
        </FormControl>
        <Button disabled={!value} onPress={handleSubmit}>
          <ButtonText>aggiungi</ButtonText>
        </Button>
      </Center>
    </Center>
  );
}

export { CameraQrCodeScannerSimulator };

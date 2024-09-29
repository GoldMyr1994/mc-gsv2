import { Input, InputField } from "@/gluestack/components/ui/input";
import { Heading } from "@/gluestack/components/ui/heading";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/gluestack/components/ui/form-control";
import { Center } from "@/gluestack/components/ui/center";
import { Button, ButtonText } from "@/gluestack/components/ui/button";
import { useState } from "react";

function CameraQrCodeScannerSimulator() {
  const [value, setValue] = useState("");

  function handleSubmit() {
    return null;
  }

  return (
    <Center className="flex-1">
      <Center className="gap-4">
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

import { Text } from "@/gluestack/components/ui/text";
import { Heading } from "@/gluestack/components/ui/heading";
import { Center } from "@/gluestack/components/ui/center";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/gluestack/components/ui/button";
import { PermissionStatus, useCameraPermissions } from "expo-camera";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { SettingsIcon } from "lucide-react-native";
import { useEffect } from "react";

function CameraPermissions() {
  const [status, requestPermission] = useCameraPermissions();

  const statusStatus = status?.status;

  useEffect(() => {
    console.log("INFO: CameraPermissions: changed requestPermission");
  }, [requestPermission]);

  useEffect(() => {
    if (statusStatus === PermissionStatus.GRANTED) {
      router.replace("/(app)/camera");
    }
  }, [statusStatus]);

  useEffect(() => {
    async function handle() {
      if (typeof statusStatus === "undefined") {
        console.log("INFO: skip CameraPermissions, undefined status");
        return;
      }
      if (statusStatus === PermissionStatus.GRANTED) {
        console.log("INFO: skip CameraPermissions, already granted");
        return;
      }
      try {
        await requestPermission();
      } catch (e) {
        console.log("ERROR: CameraPermissions: ", e);
      }
    }
    void handle();
  }, [requestPermission, statusStatus]);

  if (status?.granted) {
    return null;
  }

  const openSystemSettings = () => {
    void Linking.openSettings();
  };

  return (
    <Center className="flex-1 gap-6">
      <Center className="gap-1">
        <Heading>
          {status?.status === PermissionStatus.UNDETERMINED
            ? "Requesting camera permission"
            : "Access to camera not granted"}
        </Heading>
        <Text>Grant access to camera in system settings</Text>
      </Center>
      <Button onPress={openSystemSettings} size="xl" className="gap-2">
        <ButtonIcon as={SettingsIcon} />
        <ButtonText>System Settings</ButtonText>
      </Button>
    </Center>
  );
}

export { CameraPermissions };

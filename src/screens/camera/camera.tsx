import {
  BarcodeScanningResult,
  PermissionStatus,
  useCameraPermissions,
} from "expo-camera";
import { isDevice } from "expo-device";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

import {
  CameraPermissions,
  CameraQrCodeScanner,
  CameraQrCodeScannerSimulator,
} from "@/components";
import { useAppDispatch } from "@/store";
import { useUserId } from "@/context/authentication/hooks";

function ScreenCamera() {
  const userId = useUserId();

  const [status] = useCameraPermissions();
  const dispatch = useAppDispatch();
  const localSearchParams = useLocalSearchParams<{ add: string }>();

  const handleQrCodeScanned = ({ data }: BarcodeScanningResult) => {
    const match = data.match(/.+:\/\/.*\?add=([a-zA-Z0-9]*).?$/);
    console.log("INFO: match=", match);
    if (!!match && match[1]) {
      const id = match[1];
      router.push({
        pathname: "/(app)/camera",
        params: { add: id },
      });
    }
  };

  useEffect(() => {
    if (localSearchParams.add && userId) {
      router.push("/(app)/(drawer)/tours");
    }
  }, [dispatch, localSearchParams.add, userId]);

  if (status === null) {
    return null;
  }

  if (status.status === PermissionStatus.GRANTED) {
    if (isDevice) {
      return <CameraQrCodeScanner onQrCodeScanned={handleQrCodeScanned} />;
    }
    return <CameraQrCodeScannerSimulator />;
  }

  return <CameraPermissions />;
}

export { ScreenCamera };

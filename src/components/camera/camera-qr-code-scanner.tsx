import { Spinner } from "@/gluestack/components/ui/spinner";
import { Icon } from "@/gluestack/components/ui/icon";
import { Heading } from "@/gluestack/components/ui/heading";
import { Center } from "@/gluestack/components/ui/center";
import { CameraView, BarcodeScanningResult } from "expo-camera";
import { CameraIcon } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface Props {
  onQrCodeScanned: (r: BarcodeScanningResult) => void;
}

const absoluteFillObject = [StyleSheet.absoluteFillObject, { opacity: 0.6 }];

function CameraQrCodeScanner({ onQrCodeScanned }: Props) {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = (r: BarcodeScanningResult) => {
    if (scanned) {
      return;
    }
    const { type } = r;
    if (type === "qr" || type.toString() === "256") {
      setScanned(true);
      onQrCodeScanned({ ...r, type: "qr" });
    }
  };

  return (
    <Center className="flex-1">
      <Center className="gap-4">
        <Heading>Loading Camera</Heading>
        <Icon as={CameraIcon} size="xl" />
      </Center>
      <Spinner size="large" style={absoluteFillObject} />
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={absoluteFillObject}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      />
    </Center>
  );
}

export { CameraQrCodeScanner };

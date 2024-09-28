import { OptimizedScreen } from "@/components";
import { useLocationPermission } from "@/hooks";
import { ScreenSettingsInitialMapZoom } from "@/screens";
import { HStack } from "@gluestack-ui/themed";
import { ActivityIndicator } from "react-native";

export default function ScreenSettingsWrapper() {
  const { isGranted } = useLocationPermission();

  return (
    <OptimizedScreen>
      {isGranted ? (
        <ScreenSettingsInitialMapZoom />
      ) : (
        <HStack flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator size="large" animating />
        </HStack>
      )}
    </OptimizedScreen>
  );
}

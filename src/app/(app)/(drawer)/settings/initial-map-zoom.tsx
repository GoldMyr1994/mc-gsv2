import { HStack } from "@/gluestack/components/ui/hstack";
import { OptimizedScreen } from "@/components";
import { useLocationPermission } from "@/hooks";
import { ScreenSettingsInitialMapZoom } from "@/screens";
import { ActivityIndicator } from "react-native";

export default function ScreenSettingsWrapper() {
  const { isGranted } = useLocationPermission();

  return (
    <OptimizedScreen>
      {isGranted ? (
        <ScreenSettingsInitialMapZoom />
      ) : (
        <HStack className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" animating />
        </HStack>
      )}
    </OptimizedScreen>
  );
}

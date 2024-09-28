import { SettingsInitialMapZoom } from "@/components";
import { VStack } from "@gluestack-ui/themed";

function ScreenSettingsInitialMapZoom() {
  return (
    <VStack flex={1} p="$4" gap="$4">
      <SettingsInitialMapZoom />
    </VStack>
  );
}

export { ScreenSettingsInitialMapZoom };

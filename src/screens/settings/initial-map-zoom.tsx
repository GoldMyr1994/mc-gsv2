import { VStack } from "@/gluestack/components/ui/vstack";
import { SettingsInitialMapZoom } from "@/components";

function ScreenSettingsInitialMapZoom() {
  return (
    <VStack className="flex-1 p-4 gap-4">
      <SettingsInitialMapZoom />
    </VStack>
  );
}

export { ScreenSettingsInitialMapZoom };

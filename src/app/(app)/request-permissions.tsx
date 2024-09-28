import { OptimizedScreen } from "@/components";
import { ScreenRequestPermissions } from "@/screens";

export default function ScreenRequestPermissionsWrapper() {
  return (
    <OptimizedScreen>
      <ScreenRequestPermissions />
    </OptimizedScreen>
  );
}

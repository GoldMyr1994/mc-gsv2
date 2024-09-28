import { PermissionStatus, useForegroundPermissions } from "expo-location";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect } from "react";

function useLocationPermission() {
  const [foregroundPermissions, , getPermission] = useForegroundPermissions();
  const isGranted = foregroundPermissions?.status === PermissionStatus.GRANTED;

  useEffect(() => {
    if (!foregroundPermissions) {
      return;
    }
    if (
      [PermissionStatus.UNDETERMINED, PermissionStatus.DENIED].includes(
        foregroundPermissions.status,
      )
    ) {
      router.push("/request-permissions");
    }
  }, [foregroundPermissions]);

  const handleFocusEffect = useCallback(() => {
    void getPermission();
  }, [getPermission]);

  useFocusEffect(handleFocusEffect);

  return { foregroundPermissions, isGranted };
}

export { useLocationPermission };

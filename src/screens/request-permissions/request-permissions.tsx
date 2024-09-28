import {
  Button,
  ButtonIcon,
  Divider,
  Heading,
  Text,
  VStack,
  HStack,
  Spinner,
} from "@gluestack-ui/themed";
import { useForegroundPermissions } from "expo-location";
import { router } from "expo-router";
import { Settings } from "lucide-react-native";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function stringifyPermissionEntry(v: unknown) {
  if (
    typeof v === "boolean" ||
    typeof v === "number" ||
    typeof v === "string"
  ) {
    return v.toString();
  }
  if (typeof v === "object") {
    return JSON.stringify(v);
  }
  return "--";
}

function ScreenRequestPermissions() {
  const insets = useSafeAreaInsets();

  const [foregroundPermissions, requestForegroundPermissions] =
    useForegroundPermissions();

  useEffect(() => {
    if (foregroundPermissions?.canAskAgain) {
      void requestForegroundPermissions();
    }
  }, [foregroundPermissions?.canAskAgain, requestForegroundPermissions]);

  useEffect(() => {
    if (foregroundPermissions?.granted) {
      router.back();
    }
  }, [foregroundPermissions?.granted]);

  return (
    <VStack style={{ top: insets.top }} px="$4" space="sm">
      <Heading>PERMESSI POSIZIONE</Heading>
      <Divider />
      <VStack space="sm">
        <HStack space="sm" alignItems="center" justifyContent="space-between">
          <Heading size="md">FOREGROUND</Heading>
          {foregroundPermissions === null && <Spinner animating />}
        </HStack>
        <Text size="xs">
          Permetti all'app di usare la positione in mentre è in foreground
        </Text>
      </VStack>
      {!!foregroundPermissions && (
        <HStack alignItems="center" justifyContent="space-between" space="md">
          <VStack>
            {Object.entries(foregroundPermissions).map(([k, v]) => (
              <Heading key={k} size="xs">
                {k}: <Text size="xs">{stringifyPermissionEntry(v)}</Text>
              </Heading>
            ))}
          </VStack>
          {!foregroundPermissions.granted && (
            <Button onPress={() => undefined}>
              <ButtonIcon as={Settings} />
            </Button>
          )}
        </HStack>
      )}
    </VStack>
  );
}

export { ScreenRequestPermissions };

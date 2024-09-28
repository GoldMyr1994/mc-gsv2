import {
  VStack,
  HStack,
  Heading,
  Switch,
  ButtonIcon,
  Button,
  Pressable,
} from "@gluestack-ui/themed";
import { SwitchChangeEvent } from "react-native";

import { actions, selectors, useAppDispatch, useAppSelector } from "@/store";
import { ChevronRightIcon } from "lucide-react-native";
import { router } from "expo-router";

function SettingsDev() {
  const acceptOnlyMockedLocation = useAppSelector(
    selectors.settings.selectSettingsAcceptOnlyMockedLocation,
  );
  const dispatch = useAppDispatch();

  const handleChangeMockLocation = (e: SwitchChangeEvent) => {
    dispatch(
      actions.volatile.settings.setAcceptOnlyMockedLocation(
        e.nativeEvent.value,
      ),
    );
  };

  return (
    <VStack space="lg">
      <HStack justifyContent="space-between">
        <Heading>dev</Heading>
      </HStack>
      <HStack flex={1} justifyContent="space-between">
        <Heading>mock location</Heading>
        <Switch
          value={acceptOnlyMockedLocation}
          onChange={handleChangeMockLocation}
        />
      </HStack>
      <Pressable
        onPress={() => {
          router.push("/settings/initial-map-zoom");
        }}
      >
        <HStack flex={1} justifyContent="space-between">
          <Heading>initial map zoom</Heading>
          <Button size="sm" variant="solid">
            <ButtonIcon as={ChevronRightIcon} />
          </Button>
        </HStack>
      </Pressable>
    </VStack>
  );
}

export { SettingsDev };

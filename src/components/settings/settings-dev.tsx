import { Pressable } from "@/gluestack/components/ui/pressable";
import { ButtonIcon, Button } from "@/gluestack/components/ui/button";
import { Switch } from "@/gluestack/components/ui/switch";
import { Heading } from "@/gluestack/components/ui/heading";
import { HStack } from "@/gluestack/components/ui/hstack";
import { VStack } from "@/gluestack/components/ui/vstack";
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
      <HStack className="justify-between">
        <Heading>dev</Heading>
      </HStack>
      <HStack className="flex-1 justify-between">
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
        <HStack className="flex-1 justify-between">
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

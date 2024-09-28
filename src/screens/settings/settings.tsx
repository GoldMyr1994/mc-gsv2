import { Divider, VStack } from "@gluestack-ui/themed";

import { ScrollView } from "react-native";

import { SettingsAccount, SettingsCar, SettingsDev } from "@/components";
import { useAppSignOut } from "@/hooks";
import { useAuthenticationContext } from "@/context/authentication/hooks";

function ScreenSettings() {
  const { user } = useAuthenticationContext();

  const handleLogout = useAppSignOut("/");

  return (
    <ScrollView>
      <VStack flex={1} p="$4" gap="$4">
        <SettingsAccount user={user} handleLogout={handleLogout} />
        <Divider />
        <SettingsCar />
        <Divider />
        <SettingsDev />
      </VStack>
    </ScrollView>
  );
}

export { ScreenSettings };

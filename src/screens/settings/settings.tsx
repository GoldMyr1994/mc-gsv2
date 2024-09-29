import { VStack } from "@/gluestack/components/ui/vstack";
import { Divider } from "@/gluestack/components/ui/divider";

import { ScrollView } from "react-native";

import { SettingsAccount, SettingsCar, SettingsDev } from "@/components";
import { useAppSignOut } from "@/hooks";
import { useAuthenticationContext } from "@/context/authentication/hooks";

function ScreenSettings() {
  const { user } = useAuthenticationContext();

  const handleLogout = useAppSignOut("/");

  return (
    <ScrollView>
      <VStack className="flex-1 p-4 gap-4">
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

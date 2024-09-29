import { ButtonText, Button } from "@/gluestack/components/ui/button";
import { VStack } from "@/gluestack/components/ui/vstack";
import { HStack } from "@/gluestack/components/ui/hstack";
import { Text } from "@/gluestack/components/ui/text";
import { Avatar, AvatarFallbackText } from "@/gluestack/components/ui/avatar";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { useAppSignOut } from "@/hooks";
import { useUser } from "@/context/authentication/hooks";

function DrawerContent(props: DrawerContentComponentProps) {
  const user = useUser();
  const handleLogout = useAppSignOut("sign-in");

  return (
    <DrawerContentScrollView {...props} stickyHeaderIndices={[0]}>
      <HStack space="lg" className="p-4 items-center">
        <Avatar>
          <AvatarFallbackText>mauro conte</AvatarFallbackText>
        </Avatar>
        <VStack>
          {!!user?.displayName && <Text>{user.displayName}</Text>}
          {!!user?.phoneNumber && <Text>{user.phoneNumber}</Text>}
        </VStack>
      </HStack>
      <DrawerItemList {...props} />
      <Button onPress={handleLogout} className="mx-4">
        <ButtonText>ESCI</ButtonText>
      </Button>
    </DrawerContentScrollView>
  );
}

export { DrawerContent };

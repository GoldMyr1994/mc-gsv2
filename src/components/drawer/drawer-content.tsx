import {
  Avatar,
  AvatarFallbackText,
  Text,
  HStack,
  VStack,
  ButtonText,
  Button,
} from "@gluestack-ui/themed";
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
      <HStack p="$4" alignItems="center" space="lg">
        <Avatar>
          <AvatarFallbackText>mauro conte</AvatarFallbackText>
        </Avatar>
        <VStack>
          {!!user?.displayName && <Text>{user.displayName}</Text>}
          {!!user?.phoneNumber && <Text>{user.phoneNumber}</Text>}
        </VStack>
      </HStack>
      <DrawerItemList {...props} />
      <Button onPress={handleLogout} mx="$4">
        <ButtonText>ESCI</ButtonText>
      </Button>
    </DrawerContentScrollView>
  );
}

export { DrawerContent };

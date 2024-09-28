import {
  Button,
  VStack,
  HStack,
  ButtonText,
  Heading,
  Text,
} from "@gluestack-ui/themed";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

interface Props {
  user: Nullable<FirebaseAuthTypes.User>;
  handleLogout: () => void;
}

function SettingsAccount({ handleLogout, user }: Props) {
  if (!user) {
    return null;
  }
  return (
    <VStack space="lg">
      <HStack justifyContent="space-between">
        <Heading>ACCOUNT</Heading>
        <Button onPress={handleLogout}>
          <ButtonText>ESCI</ButtonText>
        </Button>
      </HStack>
      <HStack>
        <VStack flex={1}>
          <Text>{`uid: ${user.uid}`}</Text>
          <Text>phone number: {user.phoneNumber ?? "--"}</Text>
          <Text>email: {user.email ?? "--"}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

export { SettingsAccount };

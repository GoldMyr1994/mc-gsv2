import { Text } from "@/gluestack/components/ui/text";
import { Heading } from "@/gluestack/components/ui/heading";
import { HStack } from "@/gluestack/components/ui/hstack";
import { VStack } from "@/gluestack/components/ui/vstack";
import { Button, ButtonText } from "@/gluestack/components/ui/button";
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
      <HStack className="justify-between">
        <Heading>ACCOUNT</Heading>
        <Button onPress={handleLogout}>
          <ButtonText>ESCI</ButtonText>
        </Button>
      </HStack>
      <HStack>
        <VStack className="flex-1">
          <Text>{`uid: ${user.uid}`}</Text>
          <Text>phone number: {user.phoneNumber ?? "--"}</Text>
          <Text>email: {user.email ?? "--"}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

export { SettingsAccount };

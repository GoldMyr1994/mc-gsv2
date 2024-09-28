import {
  Button,
  ButtonIcon,
  Heading,
  Center,
  VStack,
} from "@gluestack-ui/themed";
import { RefreshCw, XCircle } from "lucide-react-native";

function ServerError({ refresh }: { refresh?: () => void }) {
  return (
    <Center flex={1}>
      <VStack gap="$4">
        <Button>
          <ButtonIcon as={XCircle} />
        </Button>
        <Heading>Server Error!</Heading>
        {!!refresh && (
          <Button onPress={refresh}>
            <ButtonIcon as={RefreshCw} />
          </Button>
        )}
      </VStack>
    </Center>
  );
}

export { ServerError };

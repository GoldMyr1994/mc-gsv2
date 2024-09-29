import { VStack } from "@/gluestack/components/ui/vstack";
import { Center } from "@/gluestack/components/ui/center";
import { Heading } from "@/gluestack/components/ui/heading";
import { Button, ButtonIcon } from "@/gluestack/components/ui/button";
import { RefreshCw, XCircle } from "lucide-react-native";

function ServerError({ refresh }: { refresh?: () => void }) {
  return (
    <Center className="flex-1">
      <VStack className="gap-4">
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

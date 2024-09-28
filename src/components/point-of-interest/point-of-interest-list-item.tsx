import { HStack, Heading, Icon, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";

import { PointOfInterest } from "@/types";

function PointOfInterestListItem({ item }: { item: PointOfInterest }) {
  return (
    <Pressable
      onPress={() => {
        router.push(`/point-of-interest/${item.id}`);
      }}
    >
      <HStack justifyContent="space-between" alignItems="center" gap="$4">
        <Heading>{item.name}</Heading>
        <Icon as={ChevronRight} />
      </HStack>
    </Pressable>
  );
}

export { PointOfInterestListItem };

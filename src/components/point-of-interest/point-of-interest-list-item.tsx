import { Pressable } from "@/gluestack/components/ui/pressable";
import { Icon } from "@/gluestack/components/ui/icon";
import { Heading } from "@/gluestack/components/ui/heading";
import { HStack } from "@/gluestack/components/ui/hstack";
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
      <HStack className="justify-between items-center gap-4">
        <Heading>{item.name}</Heading>
        <Icon as={ChevronRight} />
      </HStack>
    </Pressable>
  );
}

export { PointOfInterestListItem };

import { Text, VStack } from "@gluestack-ui/themed";

import { PointOfInterestSwiper } from "./point-of-interest-swiper";

import { PointOfInterest } from "@/types";

interface Props {
  data: PointOfInterest;
}

function PointOfInterestDetails({ data }: Props) {
  return (
    <>
      <VStack>
        <Text>ID: {data.id}</Text>
        <Text>PLACE ID: {data.placeId}</Text>
        <Text>ADDRESS: {data.formattedAddress}</Text>
        <Text>
          COORDINATE: {data.lat}, {data.lng}
        </Text>
      </VStack>
      <VStack>
        <PointOfInterestSwiper />
      </VStack>
    </>
  );
}

export { PointOfInterestDetails };

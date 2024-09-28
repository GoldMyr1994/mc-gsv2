import { VStack } from "@gluestack-ui/themed";

// TODO: better type
interface Props {
  item: unknown;
}

function PointOfInterestSwiperItem(props: Props) {
  console.log("INFO: PointOfInterestSwiperItem props", { props });
  return (
    <VStack flex={1}>
      {/* <Image
        onError={(e) => {
          console.error(e);
        }}
        style={{ resizeMode: "contain" }}
        source={item.source}
      /> */}
    </VStack>
  );
}

export { PointOfInterestSwiperItem };

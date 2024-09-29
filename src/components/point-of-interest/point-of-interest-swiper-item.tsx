import { VStack } from "@/gluestack/components/ui/vstack";

// TODO: better type
interface Props {
  item: unknown;
}

function PointOfInterestSwiperItem(props: Props) {
  console.log("INFO: PointOfInterestSwiperItem props", { props });
  return (
    <VStack className="flex-1">
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

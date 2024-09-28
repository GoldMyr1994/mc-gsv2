import SwiperFlatList from "react-native-swiper-flatlist";

import { PointOfInterestSwiperItem } from "./point-of-interest-swiper-item";

function PointOfInterestSwiper() {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={["url"]}
      // TODO: better type
      renderItem={({ item }: { item: unknown }) => (
        <PointOfInterestSwiperItem item={item} />
      )}
    />
  );
}

export { PointOfInterestSwiper };

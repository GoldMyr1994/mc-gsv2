import { Divider } from "@gluestack-ui/themed";
import { FlatList } from "react-native";

import { PointOfInterestListItem } from "./point-of-interest-list-item";

import { PointOfInterest } from "@/types";

interface Props {
  data: PointOfInterest[];
  refetch: () => void;
  isFetching: boolean;
}

function PointOfInterestList({ data, refetch, isFetching }: Props) {
  return (
    <FlatList
      data={data}
      refreshing={isFetching}
      onRefresh={refetch}
      renderItem={(props) => <PointOfInterestListItem {...props} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Divider}
    />
  );
}

export { PointOfInterestList };

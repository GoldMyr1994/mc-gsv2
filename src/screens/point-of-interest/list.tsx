import { useCallback } from "react";

import {
  PointOfInterestList as PointOfInterestListComponent,
  ScreenLoading,
  ServerError,
} from "@/components";
import {
  QUERY_KEY_POINT_OF_INTEREST_LIST,
  usePointOfInterestListQuery,
} from "@/api/points-of-interest";
import { queryClient } from "@/api";

function ScreenPointsOfInterestList() {
  const { data, error, isLoading, isFetching } = usePointOfInterestListQuery();

  const handleRefresh = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: [QUERY_KEY_POINT_OF_INTEREST_LIST],
    });
  }, []);

  if (isLoading) {
    return <ScreenLoading />;
  }

  if (error) {
    return <ServerError refresh={handleRefresh} />;
  }

  if (!data) {
    return <ServerError refresh={handleRefresh} />;
  }

  return (
    <PointOfInterestListComponent
      data={data.data.resources}
      refetch={handleRefresh}
      isFetching={isFetching}
    />
  );
}

export { ScreenPointsOfInterestList };

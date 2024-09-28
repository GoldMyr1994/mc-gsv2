import { useNavigation, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";

import {
  PointOfInterestDetails as PointOfInterestDetailsComponent,
  ScreenLoading,
  ServerError,
} from "@/components";
import { usePointOfInterestDetailsQuery } from "@/api/points-of-interest";

function ScreenPointOfInterestDetails() {
  const navigation = useNavigation();

  const { id } = useGlobalSearchParams();
  if (!id || typeof id === "object") {
    throw new Error("invalid tour id", {
      cause: { id },
    });
  }

  const { data, error, isLoading } = usePointOfInterestDetailsQuery(id);

  useEffect(() => {
    if (!data?.data.name) {
      return;
    }
    navigation.setOptions({ title: data.data.name });
  }, [navigation, data?.data.name]);

  if (isLoading) {
    return <ScreenLoading />;
  }

  if (error) {
    return <ServerError />;
  }

  if (!data) {
    return <ServerError />;
  }

  return <PointOfInterestDetailsComponent data={data.data} />;
}

export { ScreenPointOfInterestDetails };

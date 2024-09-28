import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import {
  QUERY_KEY_POINT_OF_INTEREST_DETAILS,
  QUERY_KEY_POINT_OF_INTEREST_LIST,
} from "./query-keys";

function usePointOfInterestListQuery() {
  return useQuery({
    queryKey: [QUERY_KEY_POINT_OF_INTEREST_LIST],
    queryFn: ({ signal }) => api.list(signal),
  });
}

function usePointOfInterestDetailsQuery(id: string) {
  return useQuery({
    queryKey: [QUERY_KEY_POINT_OF_INTEREST_DETAILS, id],
    queryFn: ({ signal }) => api.detail(id, signal),
  });
}

export { usePointOfInterestListQuery, usePointOfInterestDetailsQuery };

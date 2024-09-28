import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import {
  QUERY_KEY_TOUR_DETAILS,
  QUERY_KEY_TOUR_LIST,
  QUERY_KEY_TOUR_EXACT_LIST,
} from "./query-keys";

function useTourListQuery() {
  return useQuery({
    queryKey: [QUERY_KEY_TOUR_LIST],
    queryFn: ({ signal }) => api.list(signal),
  });
}

function useTourDetailsQuery(id: string, options = { enabled: true }) {
  const { enabled } = options;
  return useQuery({
    queryKey: [QUERY_KEY_TOUR_DETAILS, id],
    queryFn: ({ signal }) => api.detail(id, signal),
    enabled,
  });
}

function useTourExactListQuery(ids: Optional<string[]>) {
  return useQuery({
    queryKey: [QUERY_KEY_TOUR_EXACT_LIST, ...(ids?.length ? [ids] : [])],
    queryFn: ({ signal }) => api.exactList(ids ?? [], signal),
    enabled: !!ids?.length,
  });
}

export { useTourListQuery, useTourDetailsQuery, useTourExactListQuery };

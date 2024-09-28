import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import { QUERY_KEY_STORAGE_FILE } from "./query-keys";

function useStorageFileQuery<T>(url: string) {
  return useQuery({
    queryKey: [QUERY_KEY_STORAGE_FILE],
    queryFn: ({ signal }) => api.fetch<T>(url, signal),
    enabled: !!url,
  });
}

export { useStorageFileQuery };

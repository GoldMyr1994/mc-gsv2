import { ApiTourListResponse, Tour } from "@/types";
import { axiosInstance } from "../axios";

function list(signal?: AbortSignal) {
  return axiosInstance.get<ApiTourListResponse>(
    "/tour/list?nopaginate&filter__deleted__is=false",
    {
      signal,
    },
  );
}

function detail(id: string, signal?: AbortSignal) {
  return axiosInstance.get<Tour>(`/tour/${id}`);
}

function exactList(ids: string[], signal?: AbortSignal) {
  return axiosInstance.post<Tour[]>(`/tour/list`, { ids });
}

const api = {
  list,
  detail,
  exactList,
};

export { api };

import { ApiPointsOfInterestListResponse, PointOfInterest } from "@/types";
import { axiosInstance } from "../axios";

function list(signal?: AbortSignal) {
  return axiosInstance.get<ApiPointsOfInterestListResponse>(
    "/point-of-interest/list?nopaginate&filter__deleted__is=false",
    {
      signal,
    },
  );
}

function detail(id: string, signal?: AbortSignal) {
  return axiosInstance.get<PointOfInterest>(`/point-of-interest/${id}`);
}

const api = {
  list,
  detail,
};

export { api };

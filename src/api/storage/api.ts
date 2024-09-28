import { axiosInstance } from "../axios";

function fetch<T>(url: string, signal?: AbortSignal) {
  return axiosInstance.get<T>(url, {
    signal,
  });
}

const api = {
  fetch,
};

export { api };

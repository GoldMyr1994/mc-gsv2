import axios, { InternalAxiosRequestConfig } from "axios";

import { ENV } from "@/constants";
import { FBAuth } from "@/types/firebase";

const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
});

const axiosStorageInstance = axios.create();

function getRequestInterceptor(auth: FBAuth) {
  return async function requestInterceptor(config: InternalAxiosRequestConfig) {
    const currentUser = auth().currentUser;
    const token = await currentUser?.getIdToken();
    if (currentUser) {
      config.headers.set("authorization", `Bearer ${token}`);
    }
    return config;
  };
}

export { axiosInstance, axiosStorageInstance, getRequestInterceptor };

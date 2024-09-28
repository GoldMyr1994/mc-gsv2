import { api as storageApi } from "./storage";
import { api as tourApi } from "./tour";
import { api as pontOfInterestApi } from "./points-of-interest";

const api = {
  storage: storageApi,
  tour: tourApi,
  pontOfInterest: pontOfInterestApi,
};

export { api };
export * from "./query-client";
export * from "./axios";

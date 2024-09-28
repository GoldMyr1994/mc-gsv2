import { isDevice } from "expo-device";
import {
  Accuracy,
  LocationObject,
  LocationSubscription,
  watchPositionAsync,
} from "expo-location";
import { useEffect } from "react";

import { MOCK } from "@/constants";
import { useAppDispatch, asyncThunk } from "@/store";

function getErrorHandler(fn: unknown) {
  return function errorHandler(e: unknown) {
    console.log("ERROR: ", fn, ":", e);
  };
}

function useWatchLocation() {
  const dispatch = useAppDispatch();

  useEffect(
    function watch() {
      function subscriptionHandler(l: LocationObject) {
        // console.log("LOCATION: ", l);
        return dispatch(asyncThunk.setLocation(l));
      }
      let subscription: Optional<LocationSubscription>;
      async function get() {
        if (!isDevice) {
          return MOCK.LOCATION;
        }
        subscription = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
          },
          subscriptionHandler,
        );
      }
      try {
        void get();
      } catch (e) {
        getErrorHandler(watchPositionAsync)(e);
      }
      return function cleanup() {
        subscription?.remove();
      };
    },
    [dispatch],
  );
}

export { useWatchLocation };

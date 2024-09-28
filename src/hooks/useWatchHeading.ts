import { isDevice } from "expo-device";
import {
  LocationHeadingObject,
  LocationSubscription,
  watchHeadingAsync,
} from "expo-location";
import { useEffect } from "react";

import { MOCK } from "@/constants";
import { useAppDispatch, asyncThunk } from "@/store";

function getErrorHandler(fn: unknown) {
  return function errorHandler(e: unknown) {
    console.log("ERROR: ", fn, ":", e);
  };
}

function useWatchHeading() {
  const dispatch = useAppDispatch();

  useEffect(
    function watch() {
      function subscriptionHandler(h: LocationHeadingObject) {
        // console.log("HEADING: ", h);
        return dispatch(asyncThunk.setHeading(h));
      }
      let subscription: Optional<LocationSubscription>;
      async function get() {
        if (!isDevice) {
          return MOCK.HEADING;
        }
        subscription = await watchHeadingAsync(subscriptionHandler);
      }
      try {
        void get();
      } catch (e) {
        getErrorHandler(watchHeadingAsync)(e);
      }
      return function cleanup() {
        subscription?.remove();
      };
    },
    [dispatch],
  );
}

export { useWatchHeading };

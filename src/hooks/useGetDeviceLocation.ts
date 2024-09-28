import { isDevice } from "expo-device";
import {
  getLastKnownPositionAsync,
  getCurrentPositionAsync,
  getHeadingAsync,
} from "expo-location";
import { useEffect, useRef } from "react";

import { MOCK } from "@/constants";
import { useAppDispatch, asyncThunk } from "@/store";
import { abortOnUnmount } from "@/utils";

function getErrorHandler(fn: Function) {
  return function errorHandler(e: unknown) {
    if (e instanceof Error && e.message === "aborted") {
      console.log("INFO: aborted handled", fn.name);
      return;
    }
    console.log("ERROR: ", fn.name, ":", e);
  };
}

function useGetDeviceLocation() {
  const dispatch = useAppDispatch();

  const lastPositionController = useRef(new AbortController());

  useEffect(
    function getLastKnownPositionOnMount() {
      async function get() {
        const mock = { condition: !isDevice, returnValue: MOCK.LOCATION };
        const l = await abortOnUnmount(
          lastPositionController.current,
          getLastKnownPositionAsync,
          mock,
        ).catch((e) => {
          throw e;
        });
        if (l) {
          void dispatch(asyncThunk.setLocation(l));
        }
      }
      void get().catch(getErrorHandler(getLastKnownPositionAsync));
      const { current } = lastPositionController;
      return function cleanup() {
        current.abort();
      };
    },
    [dispatch],
  );

  useEffect(
    function getCurrentPositionOnMount() {
      const controller = new AbortController();
      async function get() {
        const mock = { condition: !isDevice, returnValue: MOCK.LOCATION };
        const l = await abortOnUnmount(
          controller,
          getCurrentPositionAsync,
          mock,
        );
        lastPositionController.current.abort();
        void dispatch(asyncThunk.setLocation(l));
      }
      void get().catch(getErrorHandler(getCurrentPositionAsync));
      return function cleanup() {
        controller.abort();
      };
    },
    [dispatch],
  );

  useEffect(
    function getHeadingOnMount() {
      const controller = new AbortController();
      async function get() {
        const mock = { condition: !isDevice, returnValue: MOCK.HEADING };
        const h = await abortOnUnmount(controller, getHeadingAsync, mock);
        void dispatch(asyncThunk.setHeading(h));
      }
      get().catch(getErrorHandler(getHeadingAsync));
      return function cleanup() {
        controller.abort();
      };
    },
    [dispatch],
  );
}

export { useGetDeviceLocation };

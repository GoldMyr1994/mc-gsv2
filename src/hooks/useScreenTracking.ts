import { FirebasePerformanceTypes } from "@react-native-firebase/perf";
import { useLocalSearchParams, usePathname } from "expo-router";
import { useEffect, useRef } from "react";

function useScreenTracking() {
  const pathname = usePathname();
  const params = useLocalSearchParams();

  const traceRef = useRef<FirebasePerformanceTypes.ScreenTrace>();
  console.log("INFO: traceRef=", traceRef);

  useEffect(() => {
    // void analytics().logScreenView({
    //   screen_class: pathname,
    //   screen_name: pathname,
    //   ...params,
    // });

    // void performance()
    //   .startScreenTrace(pathname)
    //   .then((trace) => (traceRef.current = trace));

    return function cleanup() {
      // empty
    };
  }, [pathname, params]);
}

export { useScreenTracking };

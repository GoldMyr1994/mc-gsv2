import Constants from "expo-constants";
import { useMemo, useRef } from "react";
import { AppState, useColorScheme } from "react-native";

import { ENV } from "@/constants";

const userInterfaceStyle = Constants.expoConfig?.userInterfaceStyle;

function useDeviceColorScheme() {
  const rawColorScheme = useColorScheme();
  const ref = useRef(rawColorScheme);

  const colorScheme = useMemo(() => {
    if (ENV.IS_IOS && AppState.currentState.match(/inactive|background/)) {
      return ref.current;
    }
    ref.current = rawColorScheme;
    return ref.current;
  }, [rawColorScheme]);

  if (userInterfaceStyle && userInterfaceStyle !== "automatic") {
    return userInterfaceStyle;
  }

  return colorScheme === "dark" ? "dark" : "light";
}

export { useDeviceColorScheme };

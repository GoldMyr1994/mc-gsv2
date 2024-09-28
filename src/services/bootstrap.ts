import { colors } from "config/colors";
import * as NavigationBar from "expo-navigation-bar";
import { SplashScreen } from "expo-router";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { enableFreeze } from "react-native-screens";

import { ENV } from "@/constants";

/* import { axiosInstance, getRequestInterceptor } from "@/api";
import { auth } from "./firebase"; */

function bootstrap() {
  enableFreeze(true);

  void SplashScreen.preventAutoHideAsync();
  void SystemUI.setBackgroundColorAsync(colors.black);
  setStatusBarStyle("dark");

  if (ENV.IS_ANDROID) {
    void NavigationBar.setBackgroundColorAsync(colors.black);
    void NavigationBar.setButtonStyleAsync("dark");
    setStatusBarBackgroundColor(colors.black, false);
  }

  // axiosInstance.interceptors.request.use(getRequestInterceptor(auth));
}

export { bootstrap };

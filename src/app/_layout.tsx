import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ThemeProvider } from "@react-navigation/native";
import { config } from "config/gluestack-ui.config";
import { Slot } from "expo-router";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useDeviceColorScheme } from "@/hooks";
import { bootstrap } from "@/services";
import { persistor, store } from "@/store";
import { navigationTheme } from "@/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api";
import { AuthenticationContextProvider } from "@/context";

bootstrap();

export default function Layout() {
  const colorScheme = useDeviceColorScheme();

  // useEffect(function onMount() {
  //   crashlytics().log("mounted");
  //   void analytics().logEvent("app_mounted");

  //   return function cleanup() {
  //     crashlytics().log("unmounted");
  //     void analytics().logEvent("app_unmounted");
  //   };
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationContextProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GluestackUIProvider mode="light" colorMode={colorScheme}>
              <ThemeProvider value={navigationTheme[colorScheme]}>
                <Slot />
              </ThemeProvider>
            </GluestackUIProvider>
          </PersistGate>
        </ReduxProvider>
      </AuthenticationContextProvider>
    </QueryClientProvider>
  );
}

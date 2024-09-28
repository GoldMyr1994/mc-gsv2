import { useNavigationContainerRef } from "expo-router";
import { useCallback } from "react";
import { useAuthenticationContext } from "@/context/authentication/hooks";

function useAppSignOut(to: "/" | "sign-in") {
  const navigationContainerRef = useNavigationContainerRef();
  const { signOut } = useAuthenticationContext();

  const appSignOut = useCallback(() => {
    // void analytics().logEvent("logout");
    // void analytics().setUserId(null);
    // void crashlytics().setUserId("");
    navigationContainerRef.resetRoot({
      routes: [{ name: to }],
    });
    void signOut();
  }, [navigationContainerRef, signOut, to]);

  return appSignOut;
}

export { useAppSignOut };

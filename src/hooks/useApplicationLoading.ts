import { useAuthenticationContext } from "@/context/authentication/hooks";
import { useNavigationContainerRef } from "expo-router";
import { useMemo } from "react";

function useApplicationLoading() {
  const navigationContainerRef = useNavigationContainerRef();

  const isRootNavigationReady = navigationContainerRef.isReady();

  const { isLoading: isLoadingUser, user } = useAuthenticationContext();

  const isLoading = useMemo(
    () => !isRootNavigationReady || isLoadingUser,
    [isRootNavigationReady, isLoadingUser],
  );

  return { isLoading, user };
}

export { useApplicationLoading };

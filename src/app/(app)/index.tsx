import { Text, Center, Spinner } from "@gluestack-ui/themed";
import { Redirect, SplashScreen } from "expo-router";

import { OptimizedScreen } from "@/components";
import { useAuthenticationContext } from "@/context/authentication/hooks";

export default function IndexScreen() {
  const { isLoading: isLoadingUser, user } = useAuthenticationContext();

  if (isLoadingUser) {
    return (
      <OptimizedScreen>
        <Center flex={1}>
          <Text display="none">app/(app)/index.tsx</Text>
          <Spinner size="large" animating />
        </Center>
      </OptimizedScreen>
    );
  }

  if (user) {
    void SplashScreen.hideAsync();
    return <Redirect href="/(app)/(drawer)/tours" />;
  }

  return <Redirect href="/" />;
}

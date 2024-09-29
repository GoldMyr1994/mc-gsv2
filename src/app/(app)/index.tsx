import { Spinner } from "@/gluestack/components/ui/spinner";
import { Center } from "@/gluestack/components/ui/center";
import { Text } from "@/gluestack/components/ui/text";
import { Redirect, SplashScreen } from "expo-router";

import { OptimizedScreen } from "@/components";
import { useAuthenticationContext } from "@/context/authentication/hooks";

export default function IndexScreen() {
  const { isLoading: isLoadingUser, user } = useAuthenticationContext();

  if (isLoadingUser) {
    return (
      <OptimizedScreen>
        <Center className="flex-1">
          <Text className="hidden">app/(app)/index.tsx</Text>
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

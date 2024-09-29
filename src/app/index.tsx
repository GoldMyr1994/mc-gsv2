import { Spinner } from "@/gluestack/components/ui/spinner";
import { Center } from "@/gluestack/components/ui/center";
import { Text } from "@/gluestack/components/ui/text";
import { Redirect, router, SplashScreen } from "expo-router";

import { OptimizedScreen } from "@/components";
import { useApplicationLoading } from "@/hooks";
import { useEffect } from "react";

export default function IndexScreen() {
  const { isLoading, user } = useApplicationLoading();

  useEffect(() => {
    const t = setTimeout(() => {
      router.push("/sign-in");
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  if (isLoading) {
    return (
      <OptimizedScreen>
        <Center className="flex-1">
          <Text className="hidden">app/index.tsx</Text>
          <Spinner size="large" animating />
        </Center>
      </OptimizedScreen>
    );
  }

  if (user) {
    return <Redirect href="/(app)" />;
  }

  void SplashScreen.hideAsync();
  return <Redirect href="/sign-in" />;
}

import { Stack } from "expo-router";

function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="general" />
      <Stack.Screen name="initial-map-zoom" />
    </Stack>
  );
}

export default Layout;

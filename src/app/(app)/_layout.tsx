import { HeaderTitle } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingBottom: insets.bottom,
        },
      }}
    >
      <Stack.Screen
        name="tour/[id]/index"
        options={{
          headerShown: true,
          headerTitle(props) {
            if (props.children === "tour/[id]/index") {
              return null;
            }
            return (
              <HeaderTitle tintColor={props.tintColor}>
                {props.children}
              </HeaderTitle>
            );
          },
        }}
      />
      <Stack.Screen
        name="point-of-interest/[id]"
        options={{
          headerShown: true,
          headerTitle: "", // will be set by the screen
        }}
      />
    </Stack>
  );
}

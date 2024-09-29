import { Button, ButtonIcon } from "@/gluestack/components/ui/button";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation, usePathname } from "expo-router";
import { ChevronLeftIcon, Menu } from "lucide-react-native";
import { useMemo } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

function DrawerHeaderLeft() {
  const navigation = useNavigation<
    | NativeStackNavigationProp<ParamListBase>
    | DrawerNavigationProp<ParamListBase>
  >();

  const pathName = usePathname();

  const applyPopAction = pathName === "/settings/initial-map-zoom";

  const { onAction, actionType } = useMemo(() => {
    let onNavigationAction: Optional<VoidFunction>;
    let navigationActionType: Optional<"pop" | "toggleDrawer">;

    if ("pop" in navigation && applyPopAction) {
      onNavigationAction = () => {
        navigation.pop();
      };
      navigationActionType = "pop";
    } else if ("toggleDrawer" in navigation) {
      onNavigationAction = () => {
        navigation.toggleDrawer();
      };
      navigationActionType = "toggleDrawer";
    }
    return {
      onAction: onNavigationAction,
      actionType: navigationActionType,
    };
  }, [navigation, applyPopAction]);

  if (actionType === "pop") {
    return (
      <Button onPress={onAction} isDisabled={!onAction} className="border-0">
        <ButtonIcon as={ChevronLeftIcon} />
      </Button>
    );
  }

  return (
    <Button onPress={onAction} isDisabled={!onAction} className="border-0">
      <ButtonIcon as={Menu} />
    </Button>
  );
}

export { DrawerHeaderLeft };

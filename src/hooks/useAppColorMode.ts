import { useColorMode } from "@gluestack-ui/themed";

function useAppColorMode() {
  const colorMode = useColorMode();

  return colorMode === "dark" ? "dark" : "light";
}

export { useAppColorMode };

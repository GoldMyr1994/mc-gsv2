import { useColorMode } from "@gluestack-style/react";

function useAppColorMode() {
  const colorMode = useColorMode();

  return colorMode === "dark" ? "dark" : "light";
}

export { useAppColorMode };

import { createStyle } from "@gluestack-style/react";

export const SelectActionsheetDragIndicator = createStyle({
  height: "$1",
  width: "$16",
  bg: "$backgroundLight400",
  borderRadius: "$full",
  _dark: {
    bg: "$backgroundDark500",
  },
});

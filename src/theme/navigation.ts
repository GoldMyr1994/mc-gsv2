import { Theme } from "@react-navigation/native";
import { colors } from "config/colors";

const dark: Theme = {
  dark: true,
  colors: {
    primary: colors.blue600,
    background: colors.backgroundDark950,
    card: colors.backgroundDark900,
    text: colors.textDark200,
    border: colors.borderDark200,
    notification: colors.yellow900,
  },
};

const light: Theme = {
  dark: false,
  colors: {
    primary: colors.blue400,
    background: colors.backgroundLight100,
    card: colors.backgroundLight0,
    text: colors.textLight700,
    border: colors.borderLight700,
    notification: colors.yellow100,
  },
};

const theme = {
  dark,
  light,
};

export { theme };

import { Platform } from "react-native";

const APP_PROFILE = process.env.EXPO_PUBLIC_APP_PROFILE ?? "";
const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

const IS_IOS = Platform.OS === "ios";
const IS_ANDROID = Platform.OS === "android";
const IS_WEB = Platform.OS === "web";

const ENV = {
  APP_PROFILE,
  API_URL,
  IS_IOS,
  IS_ANDROID,
  IS_WEB,
};

export { ENV };

import "ts-node/register";

import { ExpoConfig, ConfigContext } from "expo/config";

import { build as easBuildConfig } from "./eas.json";

type AppProfileKey = "development" | "production";

const base = "com.mconte.gs2init";
const name = "com.mconte.gs2init";

function ensureAppProfile(v?: string): AppProfileKey {
  if (v && Object.keys(easBuildConfig).includes(v)) {
    return v as AppProfileKey;
  }
  return "development";
  // throw new Error('Invalid "EXPO_PUBLIC_APP_PROFILE" value');
}

function getAppName(APP_PROFILE: AppProfileKey) {
  switch (APP_PROFILE) {
    case "development":
      return `${name} development`;
    case "production":
      return name;
  }
}

function getGoogleFiles(APP_PROFILE: AppProfileKey) {
  switch (APP_PROFILE) {
    case "development":
      return {
        android: process.env.GOOGLE_SERVICES_DEV_JSON,
        ios: process.env.GOOGLE_SERVICE_INFO_DEV_PLIST,
      };
    case "production":
      return {
        android: process.env.GOOGLE_SERVICES_JSON,
        ios: process.env.GOOGLE_SERVICE_INFO_PLIST,
      };
  }
}

function generateConfig({ config }: ConfigContext): ExpoConfig {
  const APP_PROFILE: "development" | "production" = ensureAppProfile(
    process.env.EXPO_PUBLIC_APP_PROFILE,
  );

  const appName = getAppName(APP_PROFILE);
  const googleFiles = getGoogleFiles(APP_PROFILE);

  const androidPackage = base;
  const bundleIdentifier = base;

  config.name = appName;
  config.scheme = name;

  config.android = {
    ...(config.android ?? {}),
    package: androidPackage,
    googleServicesFile: googleFiles.android,
  };

  config.version = "0.0.1";
  config.android.versionCode = 1;

  config.ios = {
    ...(config.ios ?? {}),
    bundleIdentifier,
    googleServicesFile: googleFiles.ios,
  };

  config.updates = {
    ...(config.updates ?? {}),
    enabled: APP_PROFILE !== "production",
  };

  return config as ExpoConfig;
}

export default generateConfig;

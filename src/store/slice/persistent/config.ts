import storage from "@react-native-async-storage/async-storage";
import { PersistConfig, createMigrate } from "redux-persist";

import { getMigrationManifest } from "./migration-manifest";
import { State as SettingsState } from "./settings";

import { ENV } from "@/constants";

interface State {
  settings: SettingsState;
}

const key = `${ENV.APP_PROFILE || "no-env"}-persist-root`;
const version = 2;

const persistConfig: PersistConfig<State> = {
  key,
  storage,
  migrate: (state, currentVersion) => {
    if (currentVersion !== version) {
      console.log("INFO: migrate", { currentVersion, version });
    }
    const migrationManifest = getMigrationManifest();
    return createMigrate(migrationManifest, { debug: false })(
      state,
      currentVersion,
    );
  },
  version,
};

console.log("INFO: persistConfig", { key, version });

export { persistConfig };

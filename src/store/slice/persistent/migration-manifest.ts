import { MigrationManifest } from "redux-persist";

/**
 * I think I'm not paid enough to consistently migrate the store for now,
 * if I need to migrate just reset the store.
 * Not so much is stored here for now anyway.
 */
function getMigrationManifest(): MigrationManifest {
  return {};
}

export { getMigrationManifest };

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { ASSETS } from "@/assets";

function selectVolatileState(state: RootState) {
  return state.volatile.settings;
}

function selectPersistentState(state: RootState) {
  return state.persistent.settings;
}

const selectSettingsAcceptOnlyMockedLocation = createSelector(
  selectVolatileState,
  (state) => state.dev.acceptOnlyMockedLocation,
);

const selectSettingsCar = createSelector(
  selectPersistentState,
  (state) => (uid: string) => {
    return (state[uid]?.car ?? "porsche") as Exclude<
      keyof typeof ASSETS.car,
      undefined
    >;
  },
);

const selectSettingInitialZoom = createSelector(
  selectPersistentState,
  (state) => (uid: string) => {
    return state[uid]?.initialZoom ?? 17.5;
  },
);

const settings = {
  selectVolatileState,
  selectPersistentState,
  selectSettingsAcceptOnlyMockedLocation,
  selectSettingsCar,
  selectSettingInitialZoom,
};

export { settings };

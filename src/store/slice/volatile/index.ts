import { combineReducers } from "@reduxjs/toolkit";

import * as location from "./location";
import * as settings from "./settings";

const slice = {
  location: location.slice,
  settings: settings.slice,
};

const actions = {
  location: location.slice.actions,
  settings: settings.slice.actions,
};

const reducer = combineReducers({
  location: location.slice.reducer,
  settings: settings.slice.reducer,
});

export { slice, actions, reducer };

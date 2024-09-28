import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { persistConfig } from "./config";
import * as settings from "./settings";

const slice = {
  settings: settings.slice,
};

const actions = {
  settings: settings.slice.actions,
};

const combinedReducer = combineReducers({
  settings: settings.slice.reducer,
});

const reducer = persistReducer(persistConfig, combinedReducer);

export { slice, actions, reducer };

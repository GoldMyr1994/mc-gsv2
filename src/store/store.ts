import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";

import { rootReducer } from "./slice";

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const reducer = combineReducers({
  ...rootReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions,
        warnAfter: 128,
      },
      immutableCheck: { warnAfter: 128 },
    });
    // .concat(api.tour.middleware)
    // .concat(api.tourPointOfInterest.middleware)
    // .concat(api.pointOfInterest.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { persistor, store, reducer };

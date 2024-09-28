/**
 * REDUX STORE TYPES
 * AppRootState: the type of the root state of the store
 * AppDispatch: the type of the dispatch function
 */

import { store, reducer } from "./store";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

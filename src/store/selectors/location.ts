import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

function selectVolatileState(state: RootState) {
  return state.volatile;
}

const selectUserLocation = createSelector(
  selectVolatileState,
  (state) => state.location,
);

const location = {
  selectVolatileState,
  selectUserLocation,
};

export { location };

import { LocationHeadingObject, LocationObject } from "expo-location";
import { createAppAsyncThunk } from "./create-async-thunk";
import { actions } from "../slice";

const setLocation = createAppAsyncThunk(
  "location/set",
  (location: LocationObject, { getState, dispatch, rejectWithValue }) => {
    const state = getState();
    if (
      state.volatile.settings.dev.acceptOnlyMockedLocation &&
      !location.mocked
    ) {
      rejectWithValue("not-mocked-location");
      return;
    }
    dispatch(actions.volatile.location.setLocation(location));
    return location;
  },
);

const setHeading = createAppAsyncThunk(
  "location/set",
  (heading: LocationHeadingObject, { dispatch }) => {
    dispatch(actions.volatile.location.setHeading(heading));
    return heading;
  },
);

const location = { setLocation, setHeading };

export { location };

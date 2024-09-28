import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationHeadingObject, LocationObject } from "expo-location";

interface State {
  location?: LocationObject;
  heading?: LocationHeadingObject;
  history: {
    location: LocationObject[];
    heading: LocationHeadingObject[];
  };
}

function getInitialState(): State {
  return {
    history: {
      location: [],
      heading: [],
    },
  };
}

const slice = createSlice({
  name: "location",
  initialState: getInitialState(),
  reducers: {
    setLocation: (state, action: PayloadAction<LocationObject>) => {
      if (state.history.location.length > 20) {
        state.history.location.shift();
      }
      state.history.location.push(action.payload);
      state.location = action.payload;
    },
    setHeading: (state, action: PayloadAction<LocationHeadingObject>) => {
      if (state.history.heading.length > 20) {
        state.history.heading.shift();
      }
      state.history.heading.push(action.payload);
      state.heading = action.payload;
    },
  },
});

export { slice };

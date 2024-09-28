import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  dev: {
    acceptOnlyMockedLocation: boolean;
  };
}

function getInitialState(): State {
  return {
    dev: {
      acceptOnlyMockedLocation:
        process.env.EXPO_PUBLIC_ACCEPT_ONLY_MOCKED_LOCATION === "true",
    },
  };
}

const slice = createSlice({
  name: "location",
  initialState: getInitialState(),
  reducers: {
    setAcceptOnlyMockedLocation: (state, action: PayloadAction<boolean>) => {
      state.dev.acceptOnlyMockedLocation = action.payload;
    },
  },
});

export { slice };

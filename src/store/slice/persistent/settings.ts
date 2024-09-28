import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ASSETS } from "@/assets";

type State = Record<
  string,
  Optional<{
    car?: keyof typeof ASSETS.car;
    initialZoom?: number;
  }>
>;

function getInitialState(): State {
  return {};
}

const slice = createSlice({
  name: "settings",
  initialState: getInitialState(),
  reducers: {
    setCarIconAssetName: (
      state,
      {
        payload,
      }: PayloadAction<{ uid: string; car: Optional<keyof typeof ASSETS.car> }>,
    ) => {
      const { uid, ...rest } = payload;
      const prev = state[uid] ?? {};
      state[uid] = { ...prev, ...rest };
    },
    setInitialZoom: (
      state,
      {
        payload,
      }: PayloadAction<{ uid: string; initialZoom: Optional<number> }>,
    ) => {
      const { uid, ...rest } = payload;
      const prev = state[uid] ?? {};
      state[uid] = { ...prev, ...rest };
    },
  },
});

export type { State };
export { slice, getInitialState };

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";

const initialState = {
  fps: 10,
  size: {
    width: 800 as Pixel,
    height: 400 as Pixel,
  },
  ticks: 0,
  ticksPerFrame: 10,
};
export const { reducer, actions } = createSlice({
  name: "world",
  initialState,
  reducers: {
    updateWorldState: (
      state,
      action: PayloadAction<Partial<typeof initialState>>
    ) => ({ ...state, ...action.payload }),
    waitTicks: (state, action: PayloadAction<number>) => ({
      ...state,
      ticks: state.ticks + action.payload,
    }),
  },
});

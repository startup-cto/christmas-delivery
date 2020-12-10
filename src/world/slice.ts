import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";

export const { reducer, actions } = createSlice({
  name: "world",
  initialState: {
    fps: 50,
    size: {
      width: 800 as Pixel,
      height: 600 as Pixel,
    },
    ticks: 0,
    ticksPerFrame: 1,
  },
  reducers: {
    waitTicks: (state, action: PayloadAction<number>) => ({
      ...state,
      ticks: state.ticks + action.payload,
    }),
  },
});

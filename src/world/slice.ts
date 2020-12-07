import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";

export const { reducer, actions } = createSlice({
  name: "world",
  initialState: {
    size: {
      width: 800 as Pixel,
      height: 600 as Pixel,
    },
    ticks: 0,
  },
  reducers: {
    waitTicks: (state, action: PayloadAction<number>) => ({
      ...state,
      ticks: state.ticks + action.payload,
    }),
  },
});

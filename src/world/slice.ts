import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";

export const initialState = {
  fps: 10,
  size: {
    width: 800 as Pixel,
    height: 400 as Pixel,
  },
  isRunning: false,
  ticks: 0,
  ticksPerFrame: 10,
};

type State = typeof initialState;

export const { reducer, actions } = createSlice({
  name: "world",
  initialState,
  reducers: {
    runGame: (
      state,
      action: PayloadAction<Pick<State, "fps" | "size" | "ticksPerFrame">>
    ) => ({ ...action.payload, isRunning: true, ticks: 0 }),
    updateWorldState: (state, action: PayloadAction<Partial<State>>) => ({
      ...state,
      ...action.payload,
    }),
    waitTicks: (state, action: PayloadAction<number>) => ({
      ...state,
      ticks: state.ticks + action.payload,
    }),
  },
});

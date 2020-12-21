import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";
import { actions as levelActions } from "../currentLevel/slice";

const initialState = {
  fps: 10,
  size: {
    width: 800 as Pixel,
    height: 400 as Pixel,
  },
  isRunning: false,
  ticks: 0,
  ticksPerFrame: 10,
};

export type World = typeof initialState;

export const { reducer, actions } = createSlice({
  name: "world",
  initialState,
  reducers: {
    runGame: (state) => ({ ...state, isRunning: true, ticks: 0 }),
    updateWorldState: (state, action: PayloadAction<Partial<World>>) => ({
      ...state,
      ...action.payload,
    }),
    waitTicks: (state, action: PayloadAction<number>) => ({
      ...state,
      ticks: state.ticks + action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(levelActions.winLevel, (state, action) => ({
      ...state,
      isRunning: false,
    }));
  },
});

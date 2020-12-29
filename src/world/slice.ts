import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";
import { actions as levelActions } from "../currentLevel/slice";

const initialState = {
  size: {
    width: 600 as Pixel,
    height: 400 as Pixel,
  },
  isRunning: false,
  ticks: 0,
  timeBetweenTicksInMS: 100,
};

export type World = typeof initialState;

export const { reducer, actions } = createSlice({
  name: "world",
  initialState,
  reducers: {
    runGame: (state) => ({ ...state, isRunning: true, ticks: 0 }),
    setTimeBetweenTicks: (state, action: PayloadAction<number>) => ({
      ...state,
      timeBetweenTicksInMS: action.payload,
    }),
    wait: (state) => ({
      ...state,
      ticks: state.ticks + 1,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(levelActions.winLevel, (state) => ({
      ...state,
      isRunning: false,
    }));
    builder.addCase(levelActions.loseLevel, (state) => ({
      ...state,
      isRunning: false,
    }));
  },
});

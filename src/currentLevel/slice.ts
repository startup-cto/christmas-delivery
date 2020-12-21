import { createSlice } from "@reduxjs/toolkit";

export enum LevelCompletionState {
  Running = "Running",
  Won = "Won",
  Lost = "Lost",
  Waiting = "Waiting",
}

const initialState = {
  levelCompletionState: LevelCompletionState.Waiting,
};

export type CurrentLevel = typeof initialState;

export const { actions, reducer } = createSlice({
  name: "currentLevel",
  initialState,
  reducers: {
    loseLevel: (state) => state,
    winLevel: (state) => ({
      ...state,
      levelCompletionState: LevelCompletionState.Won,
    }),
  },
});

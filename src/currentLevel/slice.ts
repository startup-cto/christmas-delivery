import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "currentLevel",
  initialState: {
    isCompleted: false,
  },
  reducers: {
    loseLevel: (state) => state,
    winLevel: (state) => ({ ...state, isCompleted: true }),
  },
});

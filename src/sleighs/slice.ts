import { createSlice } from "@reduxjs/toolkit";
import { PixelPerTick } from "../models/PixelPerTick";
import { Pixel } from "../models/Pixel";
import { actions as worldActions } from "../world/slice";

export const { reducer } = createSlice({
  name: "sleighs",
  initialState: [
    {
      id: "1",
      maxSpeed: 5 as PixelPerTick,
      position: {
        x: 400 as Pixel,
        y: 300 as Pixel,
      },
      commands: [],
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(worldActions.waitTicks, (state, action) =>
      state.map((sleigh) => ({
        ...sleigh,
        position: {
          x: (sleigh.position.x + sleigh.maxSpeed * action.payload) as Pixel,
          y: (sleigh.position.y + sleigh.maxSpeed * action.payload) as Pixel,
        },
      }))
    );
  },
});

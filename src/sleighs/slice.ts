import { createSlice } from "@reduxjs/toolkit";
import { PixelPerTick } from "../models/PixelPerTick";
import { Pixel } from "../models/Pixel";

export const { actions, reducer } = createSlice({
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
  reducers: {
    passTime: (state) =>
      state.map((sleigh) => ({
        ...sleigh,
        position: {
          x: (sleigh.position.x + sleigh.maxSpeed) as Pixel,
          y: (sleigh.position.y + sleigh.maxSpeed) as Pixel,
        },
      })),
  },
});

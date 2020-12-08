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
      commands: [
        {
          name: "move",
          payload: {
            x: 500 as Pixel,
            y: 100 as Pixel,
          },
        },
      ],
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(worldActions.waitTicks, (state, action) =>
      state.map((sleigh) => {
        if (sleigh.commands.length === 0) return sleigh;
        const currentPosition = sleigh.position;
        const targetPosition = sleigh.commands[0].payload;
        const direction = {
          x: targetPosition.x - currentPosition.x,
          y: targetPosition.y - currentPosition.y,
        };
        const length = Math.sqrt(
          direction.x * direction.x + direction.y * direction.y
        );
        const nextPosition = {
          x: (currentPosition.x +
            (sleigh.maxSpeed * action.payload * direction.x) / length) as Pixel,
          y: (currentPosition.y +
            (sleigh.maxSpeed * action.payload * direction.y) / length) as Pixel,
        };
        return {
          ...sleigh,
          position: nextPosition,
        };
      })
    );
  },
});

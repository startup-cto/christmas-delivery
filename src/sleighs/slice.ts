import { createSlice } from "@reduxjs/toolkit";
import { PixelPerTick } from "../models/PixelPerTick";
import { Pixel } from "../models/Pixel";
import { actions as worldActions } from "../world/slice";
import { Vector2D } from "../utils/Vector2D/Vector2D";

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
      commands: [] as Command[],
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(worldActions.waitTicks, (state, action) =>
      state.map((sleigh) => {
        if (sleigh.commands.length === 0) return sleigh;
        const currentCommand = sleigh.commands[0];
        const currentPosition = new Vector2D(sleigh.position);
        const targetPosition = new Vector2D(currentCommand.payload);
        const movementNeeded = targetPosition.subtract(currentPosition);
        const direction = movementNeeded.normalize();
        const movementDistance = sleigh.maxSpeed * action.payload;
        const nextPosition =
          movementNeeded.length <= movementDistance
            ? targetPosition
            : currentPosition.add(direction.scale(movementDistance));
        return {
          ...sleigh,
          position: nextPosition,
        };
      })
    );
  },
});

import { Pixel } from "../models/Pixel";
import { actions, reducer } from "./slice";

describe("world slice", () => {
  describe("reducer", () => {
    it("updates the world state", () => {
      const oldState = {
        fps: 100,
        size: {
          width: 100 as Pixel,
          height: 200 as Pixel,
        },
        ticks: 0,
        ticksPerFrame: 1000,
      };

      expect(reducer(oldState, actions.updateWorldState({ fps: 50 }))).toEqual({
        ...oldState,
        fps: 50,
      });
    });
  });
});

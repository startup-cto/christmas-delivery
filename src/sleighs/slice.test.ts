import { actions as worldActions } from "../world/slice";
import { reducer } from "./slice";
import { PixelPerTick } from "../models/PixelPerTick";
import { Pixel } from "../models/Pixel";

describe("sleighs", () => {
  describe("worldActions.waitTicks", () => {
    it("returns an empty array if there are no sleighs", () => {
      expect(reducer([], worldActions.waitTicks(1))).toEqual([]);
    });

    it("does not change a sleigh without commands", () => {
      const sleighWithoutCommands = {
        id: "1",
        maxSpeed: 1 as PixelPerTick,
        commands: [],
        position: {
          x: 100 as Pixel,
          y: 100 as Pixel,
        },
      };
      expect(
        reducer([sleighWithoutCommands], worldActions.waitTicks(1))
      ).toEqual([sleighWithoutCommands]);
    });
  });
});

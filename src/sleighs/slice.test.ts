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

    it("moves a sleigh towards its target by its maxSpeed", () => {
      expect(
        reducer(
          [
            {
              id: "1",
              maxSpeed: 1 as PixelPerTick,
              commands: [
                {
                  name: "move",
                  payload: {
                    x: 100 as Pixel,
                    y: 0 as Pixel,
                  },
                },
              ],
              position: {
                x: 0 as Pixel,
                y: 0 as Pixel,
              },
            },
          ],
          worldActions.waitTicks(1)
        )
      ).toContainEqual(
        expect.objectContaining({
          position: {
            x: 1 as Pixel,
            y: 0 as Pixel,
          },
        })
      );
    });

    it("moves a sleigh onto its target if it is fast enough to reach it", () => {
      const targetPosition = {
        x: 1 as Pixel,
        y: 0 as Pixel,
      };
      expect(
        reducer(
          [
            {
              id: "1",
              maxSpeed: 100 as PixelPerTick,
              commands: [
                {
                  name: "move",
                  payload: targetPosition,
                },
              ],
              position: {
                x: 0 as Pixel,
                y: 0 as Pixel,
              },
            },
          ],
          worldActions.waitTicks(1)
        )
      ).toContainEqual(
        expect.objectContaining({
          position: targetPosition,
        })
      );
    });
  });
});

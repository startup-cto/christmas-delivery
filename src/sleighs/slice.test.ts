import { actions as worldActions } from "../world/slice";
import { actions, reducer } from "./slice";
import { PixelPerTick } from "../models/PixelPerTick";
import { Pixel } from "../models/Pixel";
import { MockSleigh } from "./MockSleigh";

describe("sleighs", () => {
  describe("worldActions.waitTicks", () => {
    it("returns an empty array if there are no sleighs", () => {
      expect(reducer([], worldActions.waitTicks(1))).toEqual([]);
    });

    it("does not change a sleigh without commands", () => {
      const sleighWithoutCommands = new MockSleigh({
        command: null,
      });
      expect(
        reducer([sleighWithoutCommands], worldActions.waitTicks(1))
      ).toEqual([sleighWithoutCommands]);
    });

    it("moves a sleigh towards its target by its maxSpeed", () => {
      expect(
        reducer(
          [
            new MockSleigh({
              maxSpeed: 1 as PixelPerTick,
              command: {
                name: "move",
                payload: {
                  x: 100 as Pixel,
                  y: 0 as Pixel,
                },
              },
              position: {
                x: 0 as Pixel,
                y: 0 as Pixel,
              },
            }),
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
            new MockSleigh({
              maxSpeed: 100 as PixelPerTick,
              command: {
                name: "move",
                payload: targetPosition,
              },
              position: {
                x: 0 as Pixel,
                y: 0 as Pixel,
              },
            }),
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

  describe("actions.moveSleigh", () => {
    it("sets a move command", () => {
      const sleigh = new MockSleigh({
        command: null,
      });
      const targetPosition = { x: 1 as Pixel, y: 1 as Pixel };
      expect(
        reducer(
          [sleigh],
          actions.moveSleigh({
            targetPosition,
            sleighId: sleigh.id,
          })
        )
      ).toContainEqual(
        expect.objectContaining({
          command: {
            name: "move",
            payload: targetPosition,
          },
        })
      );
    });
  });
});

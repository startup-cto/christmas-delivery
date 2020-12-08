import { executeCode } from "./executeCode";
import { Game } from "../Game/Game";
import { Pixel } from "../models/Pixel";
import { PixelPerTick } from "../models/PixelPerTick";
import { MovableSleigh } from "../Game/MovableSleigh";

describe("executeCode", () => {
  it("allows to move sleighs", () => {
    const game: Game = ({
      houses: [],
      sleighs: [
        ({
          id: "1",
          position: {
            x: 0 as Pixel,
            y: 0 as Pixel,
          },
          maxSpeed: 1 as PixelPerTick,
          commands: [],
          moveTo: jest.fn(),
        } as unknown) as MovableSleigh,
      ],
    } as unknown) as Game;
    executeCode("game.sleighs[0].moveTo({x: 1, y: 1})", game);
    expect(game.sleighs[0].moveTo).toHaveBeenCalledWith({ x: 1, y: 1 });
  });
});

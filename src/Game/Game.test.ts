import { AnyAction, createStore } from "@reduxjs/toolkit";
import { Game } from "./Game";
import { PixelPerTick } from "../models/PixelPerTick";
import { Pixel } from "../models/Pixel";
import { Command } from "../sleighs/Command";
import { State } from "../components/Display/State";

describe("Game", () => {
  it("returns the currently available sleighs", () => {
    const initialState: State = {
      houses: [],
      world: { size: { width: 100 as Pixel, height: 100 as Pixel } },
      sleighs: [
        {
          id: "1",
          maxSpeed: 5 as PixelPerTick,
          position: {
            x: 0 as Pixel,
            y: 0 as Pixel,
          },
          commands: [] as Command[],
        },
      ],
    };
    const store = createStore<State, AnyAction, unknown, unknown>(
      () => initialState
    );
    const game = new Game(store);
    expect(game.sleighs).toEqual(initialState.sleighs);
  });
});

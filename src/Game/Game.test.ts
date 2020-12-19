import { AnyAction, createStore } from "@reduxjs/toolkit";
import { Game } from "./Game";
import { PixelPerTick } from "../models/PixelPerTick";
import { Pixel } from "../models/Pixel";
import { Command } from "../sleighs/Command";
import { State } from "../components/Display/State";
import { actions } from "../sleighs/slice";

describe("Game", () => {
  const initialState: State = {
    currentLevel: {
      isCompleted: false,
    },
    houses: [
      {
        id: "1",
        position: {
          x: 100 as Pixel,
          y: 100 as Pixel,
        },
      },
    ],
    world: {
      fps: 10,
      size: { width: 100 as Pixel, height: 100 as Pixel },
      ticks: 0,
      ticksPerFrame: 1,
    },
    sleighs: [
      {
        id: "1",
        maxSpeed: 5 as PixelPerTick,
        position: {
          x: 0 as Pixel,
          y: 0 as Pixel,
        },
        command: null as null | Command,
      },
    ],
  };
  const store = createStore<State, AnyAction, unknown, unknown>(
    () => initialState
  );

  describe("#sleighs", () => {
    it("returns the currently available sleighs", () => {
      const game = new Game(store);
      expect(game.sleighs[0]).toMatchObject(initialState.sleighs[0]);
    });

    it("allows to move sleighs", () => {
      const dispatchSpy = jest.spyOn(store, "dispatch");
      const game = new Game(store);
      const targetPosition = { x: 1 as Pixel, y: 1 as Pixel };
      game.sleighs[0].moveTo(targetPosition);
      expect(dispatchSpy).toHaveBeenCalledWith(
        actions.moveSleigh({
          sleighId: game.sleighs[0].id,
          targetPosition,
        })
      );
    });
  });

  describe("#houses", () => {
    it("returns the currently available houses", () => {
      const game = new Game(store);
      expect(game.houses).toEqual(initialState.houses);
    });
  });
});

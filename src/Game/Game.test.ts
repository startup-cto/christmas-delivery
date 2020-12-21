import { AnyAction, createStore } from "@reduxjs/toolkit";
import { Game } from "./Game";
import { Pixel } from "../models/Pixel";
import { actions } from "../sleighs/slice";
import { MockSleigh } from "../sleighs/MockSleigh";
import { RootState } from "../store/RootState";
import { MockRootState } from "../store/MockRootState";
import { MockHouse } from "../houses/MockHouse";

describe("Game", () => {
  const initialState: RootState = new MockRootState({
    houses: [new MockHouse()],
    sleighs: [new MockSleigh()],
  });
  const store = createStore<RootState, AnyAction, unknown, unknown>(
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

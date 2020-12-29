import { reducer } from "./slice";
import { actions as levelActions } from "../currentLevel/slice";
import { MockWorld } from "./MockWorld";

describe("world slice", () => {
  describe("reducer", () => {
    it("marks the game as no longer running on a win", () => {
      const oldState = {
        ...new MockWorld(),
        isRunning: true,
      };

      expect(reducer(oldState, levelActions.winLevel())).toEqual({
        ...oldState,
        isRunning: false,
      });
    });
  });
});

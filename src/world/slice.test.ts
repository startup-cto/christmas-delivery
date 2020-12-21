import { actions, initialState, reducer } from "./slice";

describe("world slice", () => {
  describe("reducer", () => {
    it("updates the world state", () => {
      const oldState = {
        ...initialState,
        fps: 100,
      };

      expect(reducer(oldState, actions.updateWorldState({ fps: 50 }))).toEqual({
        ...oldState,
        fps: 50,
      });
    });
  });
});

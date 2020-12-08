import { actions as worldActions } from "../world/slice";
import { reducer } from "./slice";

describe("sleighs", () => {
  describe("worldActions.waitTicks", () => {
    it("returns an empty array if there are no sleighs", () => {
      expect(reducer([], worldActions.waitTicks(1))).toEqual([]);
    });
  });
});

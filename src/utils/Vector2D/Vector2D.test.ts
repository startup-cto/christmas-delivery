import { Pixel } from "../../models/Pixel";
import { Vector2D } from "./Vector2D";

describe("Vector2D", () => {
  describe("#length", () => {
    it("is 0 for a vector 0, 0", () => {
      expect(new Vector2D(0, 0).length).toBe(0);
    });

    it("is 1 for a vector 1, 0", () => {
      expect(new Vector2D(1, 0).length).toBe(1);
    });

    it("is 5 for a vector 3, 4", () => {
      expect(new Vector2D(3, 4).length).toBe(5);
    });
  });

  describe("#add", () => {
    it("returns (1,1) when adding (1,0) to (0,1)", () => {
      expect(new Vector2D(1, 0).add(new Vector2D(0, 1))).toEqual(
        new Vector2D(1, 1)
      );
    });
  });
});

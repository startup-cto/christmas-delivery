import { Vector2D } from "./Vector2D";

describe("Vector2D", () => {
  describe("#length", () => {
    it("is 0 for a vector 0, 0", () => {
      expect(new Vector2D({ x: 0, y: 0 }).length).toBe(0);
    });

    it("is 1 for a vector 1, 0", () => {
      expect(new Vector2D({ x: 1, y: 0 }).length).toBe(1);
    });

    it("is 5 for a vector 3, 4", () => {
      expect(new Vector2D({ x: 3, y: 4 }).length).toBe(5);
    });
  });

  describe("#add", () => {
    it("returns (1,1) when adding (1,0) to (0,1)", () => {
      expect(
        new Vector2D({ x: 1, y: 0 }).add(new Vector2D({ x: 0, y: 1 }))
      ).toEqual(new Vector2D({ x: 1, y: 1 }));
    });
  });

  describe("#subtract", () => {
    it("returns (0,1) when subtracting (1,0) from (1,1)", () => {
      expect(
        new Vector2D({ x: 1, y: 1 }).subtract(new Vector2D({ x: 1, y: 0 }))
      ).toEqual(new Vector2D({ x: 0, y: 1 }));
    });
  });

  describe("#scale", () => {
    it("returns (5, 10) when scaling (1, 2) by 5", () => {
      expect(new Vector2D({ x: 1, y: 2 }).scale(5)).toEqual(
        new Vector2D({
          x: 5,
          y: 10,
        })
      );
    });
  });

  describe("#normalize", () => {
    it("returns (1, 0) when normalizing (10,0)", () => {
      expect(
        new Vector2D({
          x: 10,
          y: 0,
        }).normalize()
      ).toEqual(new Vector2D({ x: 1, y: 0 }));
    });
  });

  describe("#toJSON", () => {
    it("returns an object with x and y only", () => {
      expect(
        Object.getPrototypeOf(
          new Vector2D({
            x: 1,
            y: 0,
          }).toJSON()
        )
      ).toEqual({});
    });
  });

  describe("#equals", () => {
    it("returns true for two vectors with the same x and y", () => {
      expect(
        new Vector2D({ x: 1, y: 1 }).equals(new Vector2D({ x: 1, y: 1 }))
      ).toBe(true);
    });

    it("returns false for two vectors with different y", () => {
      expect(
        new Vector2D({ x: 1, y: 0 }).equals(new Vector2D({ x: 1, y: 1 }))
      ).toBe(false);
    });
  });
});

import { createGrid } from "./createGrid";

describe("createGrid", () => {
  describe("with width 3 and height 2", () => {
    it("creates an array of length 6", () => {
      expect(createGrid(3, 2).length).toBe(6);
    });

    it("creates an array with an element { x: 0, y: 0 }", () => {
      expect(createGrid(3, 2)).toContainEqual({ x: 0, y: 0 });
    });

    it("creates an array with an element { x: 2, y: 1 }", () => {
      expect(createGrid(3, 2)).toContainEqual({ x: 2, y: 1 });
    });
  });
});

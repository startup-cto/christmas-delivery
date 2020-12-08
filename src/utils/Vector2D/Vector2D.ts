import { Pixel } from "../../models/Pixel";

export class Vector2D {
  get length(): Pixel {
    return Math.sqrt(this.x ** 2 + this.y ** 2) as Pixel;
  }

  constructor(readonly x: Pixel, readonly y: Pixel) {}

  add(vector2D: Vector2D): Vector2D {
    return new Vector2D(
      (this.x + vector2D.x) as Pixel,
      (this.y + vector2D.y) as Pixel
    );
  }
}

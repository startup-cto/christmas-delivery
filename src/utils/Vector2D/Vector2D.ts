import { Pixel } from "../../models/Pixel";

export class Vector2D {
  get length(): Pixel {
    return Math.sqrt(this.x ** 2 + this.y ** 2) as Pixel;
  }

  constructor(private readonly x: Pixel, private readonly y: Pixel) {}
}

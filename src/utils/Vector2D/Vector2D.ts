import { Pixel } from "../../models/Pixel";

export class Vector2D {
  get length(): Pixel {
    return Math.sqrt(this.x ** 2 + this.y ** 2) as Pixel;
  }

  readonly x: Pixel;
  readonly y: Pixel;

  constructor(x: number, y: number) {
    this.y = y as Pixel;
    this.x = x as Pixel;
  }

  add(vector2D: Vector2D): Vector2D {
    return new Vector2D(this.x + vector2D.x, this.y + vector2D.y);
  }

  scale(factor: number): Vector2D {
    return new Vector2D(factor * this.x, factor * this.y);
  }

  normalize() {
    return this.scale(1 / this.length);
  }
}

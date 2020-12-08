import { Pixel } from "../../models/Pixel";

export class Vector2D {
  get length(): Pixel {
    return Math.sqrt(this.x ** 2 + this.y ** 2) as Pixel;
  }

  readonly x: Pixel;
  readonly y: Pixel;

  constructor({ x, y }: { x: number; y: number }) {
    this.y = y as Pixel;
    this.x = x as Pixel;
  }

  add(vector2D: Vector2D): Vector2D {
    return new Vector2D({ x: this.x + vector2D.x, y: this.y + vector2D.y });
  }

  scale(factor: number): Vector2D {
    return new Vector2D({ x: factor * this.x, y: factor * this.y });
  }

  normalize() {
    return this.scale(1 / this.length);
  }

  subtract(vector2D: Vector2D): Vector2D {
    return new Vector2D({ x: this.x - vector2D.x, y: this.y - vector2D.y });
  }

  toJSON(): { x: Pixel; y: Pixel } {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

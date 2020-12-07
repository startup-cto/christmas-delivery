import { Size } from "./Size";

export interface SpriteSheet<State> {
  source: string;
  size: Size;
  frames: number;
  states: readonly State[];
}

import { Size } from "../../models/Size";

export interface SpriteSheet<State> {
  fps: number;
  source: string;
  size: Size;
  frames: number;
  states: readonly State[];
}

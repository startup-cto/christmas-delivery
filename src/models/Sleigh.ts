import { Position } from "./Position";
import { Command } from "./Command";
import { PixelPerSecond } from "./PixelPerSecond";

export interface Sleigh {
  id: string;
  position: Position;
  maxSpeed: PixelPerSecond;
  commands: Command[];
}

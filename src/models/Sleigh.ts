import { Position } from "./Position";
import { Command } from "./Command";
import { PixelPerTick } from "./PixelPerTick";

export interface Sleigh {
  id: string;
  position: Position;
  maxSpeed: PixelPerTick;
  commands: Command[];
}

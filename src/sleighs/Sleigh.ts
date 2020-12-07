import { Position } from "../models/Position";
import { Command } from "./Command";
import { PixelPerTick } from "../models/PixelPerTick";

export interface Sleigh {
  id: string;
  position: Position;
  maxSpeed: PixelPerTick;
  commands: Command[];
}

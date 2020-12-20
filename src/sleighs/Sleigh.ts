import { Position } from "../models/Position";
import { Command } from "./Command";
import { PixelPerTick } from "../models/PixelPerTick";

export interface Sleigh {
  id: string;
  heading: Heading;
  position: Position;
  maxSpeed: PixelPerTick;
  command: Command | null;
}

export enum Heading {
  Left = "Left",
  Right = "Right",
}

import { Sleigh } from "./Sleigh";
import { Pixel } from "../models/Pixel";
import { PixelPerTick } from "../models/PixelPerTick";

export class MockSleigh implements Sleigh {
  command = null;
  id = "id";
  maxSpeed = 5 as PixelPerTick;
  position = {
    x: 0 as Pixel,
    y: 0 as Pixel,
  };

  constructor(sleigh: Partial<Sleigh> = {}) {
    Object.assign(this, sleigh);
  }
}

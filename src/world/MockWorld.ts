import { World } from "./slice";
import { Pixel } from "../models/Pixel";

export class MockWorld implements World {
  fps = 50;
  isRunning = false;
  size = {
    width: 500 as Pixel,
    height: 500 as Pixel,
  };
  ticks = 0;
  ticksPerFrame = 1;

  constructor(override: Partial<World> = {}) {
    Object.assign(this, override);
  }
}

import { World } from "./slice";
import { Pixel } from "../models/Pixel";

export class MockWorld implements World {
  isRunning = false;
  size = {
    width: 500 as Pixel,
    height: 500 as Pixel,
  };
  ticks = 0;
  timeBetweenTicksInMS = 100;

  constructor(override: Partial<World> = {}) {
    Object.assign(this, override);
  }
}

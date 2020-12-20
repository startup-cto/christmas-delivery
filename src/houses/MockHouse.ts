import { House } from "./House";
import { Pixel } from "../models/Pixel";

export class MockHouse implements House {
  id = "id";
  position = {
    x: 0 as Pixel,
    y: 0 as Pixel,
  };

  constructor(override: Partial<House> = {}) {
    Object.assign(this, override);
  }
}

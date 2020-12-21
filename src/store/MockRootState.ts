import { RootState } from "./RootState";
import { MockWorld } from "../world/MockWorld";

export class MockRootState implements RootState {
  currentLevel = { isCompleted: false };
  houses = [];
  sleighs = [];
  world = new MockWorld();

  constructor(override: Partial<RootState> = {}) {
    Object.assign(this, override);
  }
}

import { RootState } from "./RootState";
import { MockWorld } from "../world/MockWorld";
import { MockCurrentLevel } from "../currentLevel/MockCurrentLevel";

export class MockRootState implements RootState {
  currentLevel = new MockCurrentLevel();
  houses = [];
  sleighs = [];
  world = new MockWorld();

  constructor(override: Partial<RootState> = {}) {
    Object.assign(this, override);
  }
}

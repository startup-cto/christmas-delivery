import { CurrentLevel } from "./slice";

export class MockCurrentLevel implements CurrentLevel {
  isCompleted = false;

  constructor(override: Partial<CurrentLevel> = {}) {
    Object.assign(this, override);
  }
}

import { CurrentLevel, LevelCompletionState } from "./slice";

export class MockCurrentLevel implements CurrentLevel {
  levelCompletionState = LevelCompletionState.Waiting;

  constructor(override: Partial<CurrentLevel> = {}) {
    Object.assign(this, override);
  }
}

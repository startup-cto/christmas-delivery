import { RootState } from "../../store/RootState";
import { LevelCompletionState } from "../slice";

export const selectHasWon = (state: RootState) =>
  state.currentLevel.levelCompletionState === LevelCompletionState.Won;

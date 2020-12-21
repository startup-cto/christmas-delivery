import { RootState } from "../../store/RootState";
import { LevelCompletionState } from "../slice";

export const selectHasLost = (state: RootState) =>
  state.currentLevel.levelCompletionState === LevelCompletionState.Lost;

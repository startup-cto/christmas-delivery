import { RootState } from "../../store/RootState";

export const selectLevelCompletionState = (state: RootState) =>
  state.currentLevel.levelCompletionState;

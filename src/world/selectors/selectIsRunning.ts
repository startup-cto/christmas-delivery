import { RootState } from "../../store/RootState";

export function selectIsRunning(state: RootState) {
  return state.world.isRunning;
}

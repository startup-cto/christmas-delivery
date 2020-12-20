import { State } from "../../store";

export function selectIsRunning(state: State) {
  return state.world.isRunning;
}

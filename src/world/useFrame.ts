import { useSelector } from "react-redux";
import { State } from "../components/Display/State";

export function useFrame() {
  return useSelector(
    (state: State) => state.world.ticks / state.world.ticksPerFrame
  );
}

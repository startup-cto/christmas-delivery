import { useSelector } from "react-redux";
import { State } from "../components/Display/State";

export function useFrame(numberOfFrames: number) {
  return useSelector(
    (state: State) =>
      (state.world.ticks / state.world.ticksPerFrame) % numberOfFrames
  );
}

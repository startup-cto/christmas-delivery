import { useSelector } from "react-redux";
import { State } from "../store";

export function useFrame(numberOfFrames: number) {
  return useSelector(
    (state: State) =>
      (state.world.ticks / state.world.ticksPerFrame) % numberOfFrames
  );
}

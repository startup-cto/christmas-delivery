import { useSelector } from "react-redux";
import { RootState } from "../store/RootState";

export function useFrame(numberOfFrames: number) {
  return useSelector(
    (state: RootState) =>
      (state.world.ticks / state.world.ticksPerFrame) % numberOfFrames
  );
}

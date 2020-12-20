import { useSelector } from "react-redux";
import { State } from "../store";

export function useTicksPerFrame() {
  return useSelector((state: State) => state.world.ticksPerFrame);
}

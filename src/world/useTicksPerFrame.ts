import { useSelector } from "react-redux";
import { State } from "../components/Display/State";

export function useTicksPerFrame() {
  return useSelector((state: State) => state.world.ticksPerFrame);
}

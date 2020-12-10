import { State } from "../components/Display/State";
import { useSelector } from "react-redux";

export function useFPS() {
  return useSelector((state: State) => state.world.fps);
}

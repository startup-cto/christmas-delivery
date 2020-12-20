import { useSelector } from "react-redux";
import { State } from "../store";

export function useFPS() {
  return useSelector((state: State) => state.world.fps);
}

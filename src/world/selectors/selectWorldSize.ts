import { State } from "../../store";

export const selectWorldSize = (state: State) => state.world.size;

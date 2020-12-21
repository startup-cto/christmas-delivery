import { RootState } from "../../store/RootState";

export const selectWorldSize = (state: RootState) => state.world.size;

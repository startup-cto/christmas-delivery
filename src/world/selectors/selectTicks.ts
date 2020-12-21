import { RootState } from "../../store/RootState";

export const selectTicks = (state: RootState) => state.world.ticks;

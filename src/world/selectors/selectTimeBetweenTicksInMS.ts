import { RootState } from "../../store/RootState";

export const selectTimeBetweenTicksInMS = (state: RootState) =>
  state.world.timeBetweenTicksInMS;

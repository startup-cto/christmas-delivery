import { RootState } from "../../store/RootState";

export const selectFPS = (state: RootState) => state.world.fps;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as houses } from "./houses/slice";
import { reducer as sleighs } from "./sleighs/slice";
import { reducer as world } from "./world/slice";

export const store = configureStore({
  reducer: combineReducers({
    houses,
    sleighs,
    world,
  }),
});

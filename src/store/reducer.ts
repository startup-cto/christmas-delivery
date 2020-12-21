import { combineReducers } from "@reduxjs/toolkit";
import { reducer as currentLevel } from "../currentLevel/slice";
import { reducer as houses } from "../houses/slice";
import { reducer as sleighs } from "../sleighs/slice";
import { reducer as world } from "../world/slice";

export const reducer = combineReducers({
  currentLevel,
  houses,
  sleighs,
  world,
});

import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as currentLevel } from "./currentLevel/slice";
import { reducer as houses } from "./houses/slice";
import { reducer as sleighs } from "./sleighs/slice";
import { reducer as world } from "./world/slice";
import { State } from "./components/Display/State";
import { Vector2D } from "./utils/Vector2D/Vector2D";

function hasWon(state: State) {
  return new Vector2D(state.houses[0].position).equals(
    state.sleighs[0].position
  );
}

function checkWinCondition(state: State, action: AnyAction): State {
  return {
    ...state,
    currentLevel: {
      ...state.currentLevel,
      isCompleted: hasWon(state),
    },
  };
}

export function createStore() {
  return configureStore({
    reducer: (state, action) => {
      const intermediateState = combineReducers({
        currentLevel,
        houses,
        sleighs,
        world,
      })(state, action);

      return checkWinCondition(intermediateState, action);
    },
  });
}

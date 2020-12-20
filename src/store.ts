import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as currentLevel } from "./currentLevel/slice";
import { reducer as houses } from "./houses/slice";
import { reducer as sleighs } from "./sleighs/slice";
import { actions, reducer as world } from "./world/slice";
import { Vector2D } from "./utils/Vector2D/Vector2D";

const combinedReducer = combineReducers({
  currentLevel,
  houses,
  sleighs,
  world,
});

export type State = ReturnType<typeof combinedReducer>;

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
    devTools: {
      actionsBlacklist: [actions.waitTicks.toString()],
    },
    reducer: (state, action) => {
      const intermediateState = combinedReducer(state, action);

      return checkWinCondition(intermediateState, action);
    },
  });
}

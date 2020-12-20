import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as currentLevel } from "./currentLevel/slice";
import { reducer as houses } from "./houses/slice";
import { reducer as sleighs } from "./sleighs/slice";
import { reducer as world } from "./world/slice";
import createSagaMiddleware from "redux-saga";
import { worldSaga } from "./world/saga";

const reducer = combineReducers({
  currentLevel,
  houses,
  sleighs,
  world,
});

export type State = ReturnType<typeof reducer>;

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(worldSaga);
  return store;
}

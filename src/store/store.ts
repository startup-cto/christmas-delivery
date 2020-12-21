import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { worldSaga } from "../world/saga";
import { reducer } from "./reducer";

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(worldSaga);
  return store;
}

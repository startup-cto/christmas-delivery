import React from "react";
import { Pixel } from "./models/Pixel";
import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { App } from "./App";
import { Provider } from "react-redux";
import { reducer as sleighs } from "./sleighs/slice";

export const { reducer: world } = createSlice({
  name: "world",
  initialState: {
    size: {
      width: 800 as Pixel,
      height: 600 as Pixel,
    },
  },
  reducers: {},
});

export const { reducer: houses } = createSlice({
  name: "houses",
  initialState: [
    {
      id: "1",
      position: {
        x: 100 as Pixel,
        y: 100 as Pixel,
      },
    },
  ],
  reducers: {},
});

const store = configureStore({
  reducer: combineReducers({
    houses,
    sleighs,
    world,
  }),
});

function ConnectedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ConnectedApp;

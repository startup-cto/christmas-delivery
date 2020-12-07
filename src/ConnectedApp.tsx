import React from "react";
import { Pixel } from "./models/Pixel";
import { PixelPerTick } from "./models/PixelPerTick";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { App } from "./App";
import { Provider } from "react-redux";

const initialState = {
  houses: [
    {
      id: "1",
      position: {
        x: 100 as Pixel,
        y: 100 as Pixel,
      },
    },
  ],
  sleighs: [
    {
      id: "1",
      maxSpeed: 5 as PixelPerTick,
      position: {
        x: 400 as Pixel,
        y: 300 as Pixel,
      },
      commands: [],
    },
  ],
  world: {
    size: {
      width: 800 as Pixel,
      height: 600 as Pixel,
    },
  },
};

export const { reducer, actions } = createSlice({
  name: "game",
  initialState,
  reducers: {
    passTime: (state) => ({
      ...state,
      sleighs: state.sleighs.map((sleigh) => ({
        ...sleigh,
        position: {
          x: (sleigh.position.x + sleigh.maxSpeed) as Pixel,
          y: (sleigh.position.y + sleigh.maxSpeed) as Pixel,
        },
      })),
    }),
  },
});
const store = configureStore({
  reducer,
});

function ConnectedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ConnectedApp;

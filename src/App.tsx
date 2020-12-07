import React from "react";
import { Display } from "./Display";
import { Pixel } from "./models/Pixel";
import { PixelPerSecond } from "./models/PixelPerSecond";
import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
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
      maxSpeed: 5 as PixelPerSecond,
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

const store = configureStore({
  reducer: (state = defaultState, action) => state,
});

function App() {
  const state = store.getState();
  return <Display state={state} />;
}

export default App;

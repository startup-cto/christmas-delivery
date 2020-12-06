import React from "react";
import { Display } from "./Display";
import { Pixel } from "./models/Pixel";

function App() {
  const state = {
    sleighs: [
      {
        id: "1",
        position: {
          x: 400 as Pixel,
          y: 300 as Pixel,
        },
      },
    ],
    world: {
      size: {
        width: 800 as Pixel,
        height: 600 as Pixel,
      },
    },
  };
  return <Display state={state} />;
}

export default App;

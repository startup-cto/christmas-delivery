import { State } from "./models/State";
import React from "react";
import { Sprite } from "./components/Sprite";
import { Pixel } from "./models/Pixel";
import sleighSpriteSheet from "./assets/sleigh.png";

interface Props {
  state: State;
}

export function Display({ state }: Props) {
  return (
    <div
      style={{
        position: "relative",
        border: "solid 1px black",
        margin: "1rem",
        width: state.world.size.width,
        height: state.world.size.height,
      }}
    >
      {state.sleighs.map((sleigh) => (
        <Sprite
          key={sleigh.id}
          position={sleigh.position}
          spriteSheet={{
            source: sleighSpriteSheet,
            size: {
              width: 250 as Pixel,
              height: 125 as Pixel,
            },
            frames: 5,
            states: ["idle", "moving", "crashing", "burning"],
          }}
          state="idle"
        />
      ))}
    </div>
  );
}

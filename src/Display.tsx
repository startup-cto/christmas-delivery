import { State } from "./models/State";
import React from "react";
import { SleighSprite } from "./components/sprites/sleigh-sprite/SleighSprite";
import { HouseSprite } from "./components/sprites/house-sprite/HouseSprite";

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
        <SleighSprite key={sleigh.id} sleigh={sleigh} state="idle" />
      ))}
      {state.houses.map((house) => (
        <HouseSprite key={house.id} position={house.position} state="idle" />
      ))}
    </div>
  );
}

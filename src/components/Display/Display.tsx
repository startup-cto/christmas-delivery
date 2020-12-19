import { State } from "./State";
import React from "react";
import { SleighSprite } from "../../sleighs/SleighSprite/SleighSprite";
import { HouseSprite } from "../../houses/HouseSprite/HouseSprite";

interface Props {
  state: State;
}

export function Display({ state }: Props) {
  return (
    <div
      style={{
        position: "relative",
        width: state.world.size.width,
        height: state.world.size.height,
      }}
    >
      {state.houses.map((house) => (
        <HouseSprite key={house.id} position={house.position} state="idle" />
      ))}
      {state.sleighs.map((sleigh) => (
        <SleighSprite key={sleigh.id} sleigh={sleigh} state="idle" />
      ))}
    </div>
  );
}

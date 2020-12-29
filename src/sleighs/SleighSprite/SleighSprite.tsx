import { Sprite } from "../../components/Sprite/Sprite";
import sleighSpriteSheet from "./sleigh.png";
import { Pixel } from "../../models/Pixel";
import React from "react";
import { Heading, Sleigh } from "../Sleigh";

const sleighSpriteSheetMetaData = {
  fps: 10,
  source: sleighSpriteSheet,
  size: {
    width: 256 as Pixel,
    height: 128 as Pixel,
  },
  frames: 1,
  states: ["idle"] as const,
};

export interface Props {
  sleigh: Sleigh;
  state: typeof sleighSpriteSheetMetaData["states"][number];
}

export function SleighSprite({ sleigh: { heading, position }, state }: Props) {
  return (
    <Sprite
      position={position}
      spriteSheet={sleighSpriteSheetMetaData}
      mirror={heading === Heading.Left}
      scale={1 / 2}
      state={state}
    />
  );
}

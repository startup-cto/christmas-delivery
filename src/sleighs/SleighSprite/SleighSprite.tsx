import { Sprite } from "../../components/Sprite/Sprite";
import sleighSpriteSheet from "./sleigh.png";
import { Pixel } from "../../models/Pixel";
import React from "react";
import { Sleigh } from "../Sleigh";

const sleighSpriteSheetMetaData = {
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

export function SleighSprite({ sleigh: { position }, state }: Props) {
  return (
    <Sprite
      position={position}
      spriteSheet={sleighSpriteSheetMetaData}
      state={state}
    />
  );
}

import { Sprite } from "../../Sprite";
import sleighSpriteSheet from "./sleigh.png";
import { Pixel } from "../../../models/Pixel";
import React from "react";
import { Sleigh } from "../../../models/Sleigh";

const sleighSpriteSheetMetaData = {
  source: sleighSpriteSheet,
  size: {
    width: 250 as Pixel,
    height: 125 as Pixel,
  },
  frames: 6,
  states: ["idle", "moving", "crashing", "burning"] as const,
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

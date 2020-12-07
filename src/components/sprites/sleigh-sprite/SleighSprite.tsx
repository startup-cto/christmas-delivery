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
  frames: 5,
  states: ["idle", "moving", "crashing", "burning"] as const,
};

export function SleighSprite(props: {
  sleigh: Sleigh;
  state: typeof sleighSpriteSheetMetaData["states"][number];
}) {
  return (
    <Sprite
      position={props.sleigh.position}
      spriteSheet={sleighSpriteSheetMetaData}
      state={props.state}
    />
  );
}

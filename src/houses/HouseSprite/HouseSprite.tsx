import { Sprite } from "../../components/Sprite/Sprite";
import houseSpriteSheet from "./house.png";
import { Pixel } from "../../models/Pixel";
import React from "react";
import { Position } from "../../models/Position";

const houseSpriteSheetMetaData = {
  fps: 10,
  source: houseSpriteSheet,
  size: {
    width: 64 as Pixel,
    height: 96 as Pixel,
  },
  frames: 11,
  states: ["idle"] as const,
};

export interface Props {
  position: Position;
  state: typeof houseSpriteSheetMetaData["states"][number];
}

export function HouseSprite({ position, state }: Props) {
  return (
    <Sprite
      position={position}
      spriteSheet={houseSpriteSheetMetaData}
      state={state}
    />
  );
}

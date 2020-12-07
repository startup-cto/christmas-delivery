import { Sprite } from "../../Sprite";
import houseSpriteSheet from "./house.png";
import { Pixel } from "../../../models/Pixel";
import React from "react";
import { Position } from "../../../models/Position";

const houseSpriteSheetMetaData = {
  source: houseSpriteSheet,
  size: {
    width: 100 as Pixel,
    height: 100 as Pixel,
  },
  frames: 1,
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

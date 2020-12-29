import { Sprite } from "../../components/Sprite/Sprite";
import treeSpriteSheet from "./tree.png";
import { Pixel } from "../../models/Pixel";
import React from "react";
import { Position } from "../../models/Position";

const treeSpriteSheetMetaData = {
  fps: 10,
  source: treeSpriteSheet,
  size: {
    width: 64 as Pixel,
    height: 96 as Pixel,
  },
  frames: 1,
  states: ["idle"] as const,
};

export interface Props {
  position: Position;
}

export function TreeSprite({ position }: Props) {
  return (
    <Sprite
      position={position}
      spriteSheet={treeSpriteSheetMetaData}
      scale={1}
      state="idle"
    />
  );
}

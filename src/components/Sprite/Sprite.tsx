import { Position } from "../../models/Position";
import React from "react";
import { SpriteSheet } from "./SpriteSheet";
import { useFrame } from "../../useFrame";

interface Props<State> {
  position: Position;
  state: State;
  spriteSheet: SpriteSheet<State>;
}

export function Sprite<State>({
  position: { x, y },
  state,
  spriteSheet,
}: Props<State>) {
  const frame = useFrame(spriteSheet.frames);
  const { width, height } = spriteSheet.size;
  const row = spriteSheet.states.findIndex((el) => el === state);
  const xOffset = -1 * frame * width;
  const yOffset = -1 * row * height;
  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        left: x - width / 2,
        top: y - height / 2,
        backgroundImage: `url(${spriteSheet.source})`,
        backgroundPositionX: xOffset,
        backgroundPositionY: yOffset,
      }}
    />
  );
}

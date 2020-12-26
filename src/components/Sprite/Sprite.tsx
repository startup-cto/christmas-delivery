import { Position } from "../../models/Position";
import React from "react";
import { SpriteSheet } from "./SpriteSheet";
import { useFrame } from "../../world/useFrame";
import styled from "styled-components";
import { prop } from "ramda";

interface Props<State> {
  mirror?: boolean;
  position: Position;
  scale?: number;
  state: State;
  spriteSheet: SpriteSheet<State>;
}

const StaticSprite = styled.div<{
  width: number;
  height: number;
  imgSource: string;
}>`
  position: absolute;
  width: ${prop("width")}px;
  height: ${prop("height")}px;
  background-image: url(${prop("imgSource")});
  transition-property: left, top;
  transition-duration: 0.5s;
`;

export function Sprite<State>({
  mirror = false,
  position: { x, y },
  scale = 1,
  state,
  spriteSheet,
}: Props<State>) {
  const frame = useFrame(spriteSheet.frames) % spriteSheet.frames;
  const { width, height } = spriteSheet.size;
  const row = spriteSheet.states.findIndex((el) => el === state);
  const xOffset = -1 * frame * width;
  const yOffset = -1 * row * height;
  const top = Math.floor(y - height / 2);
  const left = Math.floor(x - width / 2);
  return (
    <StaticSprite
      style={{
        left,
        top,
        backgroundPositionX: xOffset,
        backgroundPositionY: yOffset,
        transform: `scaleX(${mirror ? -scale : scale} ) scaleY(${scale})`,
        zIndex: Math.max(top + 100, 0),
      }}
      height={height}
      imgSource={spriteSheet.source}
      width={width}
    />
  );
}

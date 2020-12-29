import { Position } from "../../models/Position";
import React from "react";
import { SpriteSheet } from "./SpriteSheet";
import styled, { keyframes } from "styled-components";
import { prop } from "ramda";
import { Pixel } from "../../models/Pixel";

interface Props<State> {
  mirror?: boolean;
  position: Position;
  scale?: number;
  state: State;
  spriteSheet: SpriteSheet<State>;
}

const createSpriteAnimation = (lastXPosition: Pixel) => keyframes`
from {
  background-position-x: 0;
}

to {
  background-position-x: ${lastXPosition}px;
}
`;

const StaticSprite = styled.div<{
  fps: number;
  frames: number;
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
  animation: ${({ frames, width }) =>
      createSpriteAnimation((width * frames) as Pixel)}
    ${({ frames, fps }) => frames / fps}s steps(${prop("frames")}) infinite;
`;

export function Sprite<State>({
  mirror = false,
  position: { x, y },
  scale = 1,
  state,
  spriteSheet,
}: Props<State>) {
  const { width, height } = spriteSheet.size;
  const row = spriteSheet.states.findIndex((el) => el === state);
  const yOffset = -1 * row * height;
  const top = Math.floor(y);
  const left = Math.floor(x - width / 2);
  return (
    <StaticSprite
      style={{
        left,
        top,
        backgroundPositionY: yOffset,
        transform: `scaleX(${mirror ? -scale : scale} ) scaleY(${scale})`,
        zIndex: Math.max(top + 100, 0),
      }}
      fps={spriteSheet.fps}
      frames={spriteSheet.frames}
      height={height}
      imgSource={spriteSheet.source}
      width={width}
    />
  );
}

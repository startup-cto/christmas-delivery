import React from "react";
import { useSelector } from "react-redux";
import { selectWorldSize } from "../../world/selectors/selectWorldSize";
import { Houses } from "../../houses/Houses/Houses";
import { Sleighs } from "../../sleighs/Sleighs/Sleighs";
import { GameEndAnnouncement } from "../GameEndAnnouncement/GameEndAnnouncement";
import { prop } from "ramda";
import styled from "styled-components";
import { Pixel } from "../../models/Pixel";

interface Props {
  width: Pixel;
  height: Pixel;
}

const Background = styled.div<Props>`
  background-color: #ddd;
  position: relative;
  height: ${prop("height")}px;
  width: ${prop("width")}px;
  overflow: hidden;
  margin: 1rem auto;
`;

export function Display() {
  const worldSize = useSelector(selectWorldSize);
  return (
    <Background width={worldSize.width} height={worldSize.height}>
      <Houses />
      <Sleighs />
      <GameEndAnnouncement />
    </Background>
  );
}

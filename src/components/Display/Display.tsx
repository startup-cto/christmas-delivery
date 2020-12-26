import React from "react";
import { useSelector } from "react-redux";
import { selectWorldSize } from "../../world/selectors/selectWorldSize";
import { Houses } from "../../houses/Houses/Houses";
import { Sleighs } from "../../sleighs/Sleighs/Sleighs";
import { GameEndAnnouncement } from "../GameEndAnnouncement/GameEndAnnouncement";
import { prop } from "ramda";
import styled from "styled-components";
import { Pixel } from "../../models/Pixel";
import { Trees } from "../../trees/Trees";

interface Props {
  width: Pixel;
  height: Pixel;
}

const Background = styled.div<Props>`
  background: linear-gradient(180deg, #eae9ff, #8cb9c7);
  position: relative;
  height: ${prop("height")}px;
  width: ${prop("width")}px;
  overflow: hidden;
  margin: 1rem auto;
`;

export function Display() {
  const { height, width } = useSelector(selectWorldSize);
  return (
    <Background width={width} height={height}>
      <Trees />
      <Houses />
      <Sleighs />
      <GameEndAnnouncement />
    </Background>
  );
}

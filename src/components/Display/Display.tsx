import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectWorldSize } from "../../world/selectors/selectWorldSize";
import { Houses } from "../../houses/Houses/Houses";
import { Sleighs } from "../../sleighs/Sleighs/Sleighs";
import { GameEndAnnouncement } from "../GameEndAnnouncement/GameEndAnnouncement";
import { prop } from "ramda";
import styled from "styled-components";
import { Pixel } from "../../models/Pixel";
import { TreeSprite } from "../../trees/TreeSprite/TreeSprite";
import { Position } from "../../models/Position";
import { createGrid } from "../../utils/createGrid";

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
  const { height, width } = useSelector(selectWorldSize);
  const [treePositions, setTreePositions] = useState<Position[]>([]);
  useEffect(() => {
    const numberOfColumns = Math.ceil(width / 100);
    const numberOfRows = Math.ceil(height / 100);
    console.log({ numberOfColumns, numberOfRows });
    const jitter = 0.8;
    setTreePositions(
      createGrid(numberOfColumns, numberOfRows)
        .map(({ x, y }) => ({
          x: x + Math.random() * jitter,
          y: y + Math.random() * jitter,
        }))
        .map(({ x, y }) => ({
          x: Math.floor(x * 100) as Pixel,
          y: Math.floor(y * 100) as Pixel,
        }))
    );
  }, [setTreePositions, width, height]);
  return (
    <Background width={width} height={height}>
      {treePositions.map((position, index) => (
        <TreeSprite position={position} key={index} />
      ))}
      <Houses />
      <Sleighs />
      <GameEndAnnouncement />
    </Background>
  );
}

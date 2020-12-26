import { useSelector } from "react-redux";
import { selectWorldSize } from "../world/selectors/selectWorldSize";
import React, { useEffect, useState } from "react";
import { Position } from "../models/Position";
import { createGrid } from "../utils/createGrid";
import { Pixel } from "../models/Pixel";
import { TreeSprite } from "./TreeSprite/TreeSprite";

export function Trees() {
  const { height, width } = useSelector(selectWorldSize);
  const [treePositions, setTreePositions] = useState<Position[]>([]);
  useEffect(() => {
    const averageTreeDistance = 130 as Pixel;
    const numberOfColumns = Math.ceil(width / averageTreeDistance);
    const numberOfRows = Math.ceil(height / averageTreeDistance);
    const jitter = 0.8;
    setTreePositions(
      createGrid(numberOfColumns, numberOfRows)
        .map(({ x, y }) => ({
          x: x + Math.random() * jitter,
          y: y + Math.random() * jitter,
        }))
        .map(({ x, y }) => ({
          x: Math.floor(x * averageTreeDistance) as Pixel,
          y: Math.floor(y * averageTreeDistance) as Pixel,
        }))
    );
  }, [setTreePositions, width, height]);

  return (
    <>
      {treePositions.map((position, index) => (
        <TreeSprite position={position} key={index} />
      ))}
    </>
  );
}

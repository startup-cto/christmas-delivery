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
    const numberOfColumns = Math.ceil(width / 100);
    const numberOfRows = Math.ceil(height / 100);
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
    <>
      {treePositions.map((position, index) => (
        <TreeSprite position={position} key={index} />
      ))}
    </>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { selectWorldSize } from "../../world/selectors/selectWorldSize";
import { Houses } from "../../houses/Houses/Houses";
import { Sleighs } from "../../sleighs/Sleighs/Sleighs";

export function Display() {
  const worldSize = useSelector(selectWorldSize);
  return (
    <div
      style={{
        position: "relative",
        width: worldSize.width,
        height: worldSize.height,
      }}
    >
      <Houses />
      <Sleighs />
    </div>
  );
}

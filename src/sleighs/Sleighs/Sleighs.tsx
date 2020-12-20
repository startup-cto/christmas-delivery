import { useSelector } from "react-redux";
import { selectSleighs } from "../selectors/selectSleights";
import { SleighSprite } from "../SleighSprite/SleighSprite";
import { equals } from "ramda";
import React from "react";

export function Sleighs() {
  const sleighs = useSelector(selectSleighs, equals);
  return (
    <>
      {sleighs.map((sleigh) => (
        <SleighSprite key={sleigh.id} sleigh={sleigh} state="idle" />
      ))}
    </>
  );
}

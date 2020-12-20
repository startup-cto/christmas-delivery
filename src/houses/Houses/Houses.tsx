import { useSelector } from "react-redux";
import { selectHouses } from "../selectors/selectHouses";
import { HouseSprite } from "../HouseSprite/HouseSprite";
import React from "react";

export function Houses() {
  const houses = useSelector(selectHouses);
  return (
    <>
      {houses.map((house) => (
        <HouseSprite key={house.id} position={house.position} state="idle" />
      ))}
    </>
  );
}

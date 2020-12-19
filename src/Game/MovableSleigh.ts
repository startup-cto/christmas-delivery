import { Sleigh } from "../sleighs/Sleigh";
import { Position } from "../models/Position";
import { PixelPerTick } from "../models/PixelPerTick";
import { Command } from "../sleighs/Command";
import { AnyAction } from "@reduxjs/toolkit";
import { actions } from "../sleighs/slice";

export class MovableSleigh implements Sleigh {
  public command: Command | null;
  public id: string;
  public maxSpeed: PixelPerTick;
  public position: Position;

  constructor(sleigh: Sleigh, private dispatch: (action: AnyAction) => void) {
    this.command = sleigh.command;
    this.id = sleigh.id;
    this.maxSpeed = sleigh.maxSpeed;
    this.position = sleigh.position;
  }

  moveTo(targetPosition: Position) {
    this.dispatch(
      actions.moveSleigh({
        sleighId: this.id,
        targetPosition,
      })
    );
  }
}

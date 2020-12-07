import { Position } from "../models/Position";

interface MoveCommand {
  name: "move";
  payload: {
    targetPosition: Position;
  };
}

export type Command = MoveCommand;

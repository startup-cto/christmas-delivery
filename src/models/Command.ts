import { Position } from "./Position";

interface MoveCommand {
  name: "move";
  payload: {
    targetPosition: Position;
  };
}

export type Command = MoveCommand;

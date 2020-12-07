import { Position } from "../models/Position";

interface MoveCommand {
  name: "move";
  payload: Position;
}

export type Command = MoveCommand;

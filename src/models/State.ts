import { Sleigh } from "./Sleigh";
import { Size } from "./Size";

export interface State {
  sleighs: Sleigh[];
  world: {
    size: Size;
  };
}

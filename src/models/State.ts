import { Sleigh } from "../sleighs/Sleigh";
import { Size } from "./Size";
import { House } from "./House";

export interface State {
  houses: House[];
  sleighs: Sleigh[];
  world: {
    size: Size;
  };
}

import { Sleigh } from "../../sleighs/Sleigh";
import { Size } from "../../models/Size";
import { House } from "../../houses/House";

export interface State {
  houses: House[];
  sleighs: Sleigh[];
  world: {
    size: Size;
    ticks: number;
  };
}

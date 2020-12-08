import { Action, Store } from "@reduxjs/toolkit";
import { Sleigh } from "../sleighs/Sleigh";
import { State } from "../components/Display/State";
import { House } from "../houses/House";

export class Game {
  get houses(): House[] {
    return this.store.getState().houses;
  }

  get sleighs(): Sleigh[] {
    return this.store.getState().sleighs;
  }
  constructor(private store: Store<State, Action>) {}
}

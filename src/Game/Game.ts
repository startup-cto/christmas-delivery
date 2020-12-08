import { Action, Store } from "@reduxjs/toolkit";
import { Sleigh } from "../sleighs/Sleigh";
import { State } from "../components/Display/State";

export class Game {
  get sleighs(): Sleigh[] {
    return this.store.getState().sleighs;
  }
  constructor(private store: Store<State, Action>) {}
}

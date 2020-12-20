import { Action, Store } from "@reduxjs/toolkit";
import { House } from "../houses/House";
import { MovableSleigh } from "./MovableSleigh";
import { State } from "../store";

export class Game {
  get houses(): House[] {
    return this.store.getState().houses;
  }

  get sleighs(): MovableSleigh[] {
    return this.store
      .getState()
      .sleighs.map(
        (sleigh) =>
          new MovableSleigh(sleigh, this.store.dispatch.bind(this.store))
      );
  }

  constructor(private store: Store<State, Action>) {}
}

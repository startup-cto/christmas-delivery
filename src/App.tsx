import { useDispatch, useSelector } from "react-redux";
import { State } from "./models/State";
import { Display } from "./Display";
import React from "react";
import { actions } from "./sleighs/slice";

export function App() {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Display state={state} />
      <button onClick={() => dispatch(actions.passTime())}>Wait 1 tick</button>
    </>
  );
}

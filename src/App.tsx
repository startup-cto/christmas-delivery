import { useDispatch, useSelector } from "react-redux";
import { State } from "./components/Display/State";
import { Display } from "./components/Display/Display";
import React from "react";
import { actions } from "./world/slice";

export function App() {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Display state={state} />
      <button onClick={() => dispatch(actions.waitTicks(1))}>
        Wait 1 tick
      </button>
    </>
  );
}

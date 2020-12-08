import { useDispatch, useSelector } from "react-redux";
import { State } from "./components/Display/State";
import { Display } from "./components/Display/Display";
import React, { useEffect } from "react";
import { actions as worldActions } from "./world/slice";
import { Game } from "./Game/Game";
import { store } from "./store";
import { executeCode } from "./executeCode/executeCode";

export function App() {
  const state = useSelector((state: State) => state);
  const code = `
    game.sleighs[0].moveTo(game.houses[0].position)
  `;
  function runCode() {
    const game = new Game(store);
    executeCode(code, game);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const fps = 50;
    const timer = setInterval(
      () => dispatch(worldActions.waitTicks(1)),
      1000 / fps
    );
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
      <Display state={state} />
      <button onClick={runCode}>Run code</button>
    </>
  );
}

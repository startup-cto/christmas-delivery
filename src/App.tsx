import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { State } from "./components/Display/State";
import { Display } from "./components/Display/Display";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { actions as worldActions } from "./world/slice";
import { Game } from "./Game/Game";
import { executeCode } from "./executeCode/executeCode";

import {
  codeInputLabel,
  explanation,
  githubLinkText,
  runCodeButtonLabel,
  successMessage,
  twitchLinkText,
} from "./locale/en/main.json";
import { useFPS } from "./world/useFPS";
import { useTicksPerFrame } from "./world/useTicksPerFrame";

export function App() {
  const fps = useFPS();
  const ticksPerFrame = useTicksPerFrame();
  const state = useSelector((state: State) => state);
  const { store } = useContext(ReactReduxContext);
  const hasWon = useSelector((state: State) => state.currentLevel.isCompleted);
  const [code, setCode] = useState(
    `const sleigh = game.sleighs[0];
const house = game.houses[0];
const positionOfHouse = house.position;
const someRandomPosition = { x: 300, y: 300 };
sleigh.moveTo(someRandomPosition);`
  );
  function runCode(event: ChangeEvent<unknown>) {
    event.preventDefault();
    const game = new Game(store);
    executeCode(code, game);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(
      () => dispatch(worldActions.waitTicks(ticksPerFrame)),
      1000 / fps
    );
    return () => clearInterval(timer);
  }, [dispatch, fps, ticksPerFrame]);

  return (
    <>
      <div>{explanation}</div>
      <a href="https://www.twitch.tv/the_startup_cto">{twitchLinkText}</a>
      <a href="https://github.com/startup-cto/christmas-delivery">
        {githubLinkText}
      </a>
      {hasWon && <div>{successMessage}</div>}
      <Display state={state} />
      <form>
        <label htmlFor="code">{codeInputLabel}</label>
        <textarea
          id="code"
          style={{
            display: "block",
            height: "7rem",
            width: state.world.size.width,
            margin: "1rem",
          }}
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button onClick={runCode}>{runCodeButtonLabel}</button>
      </form>
    </>
  );
}

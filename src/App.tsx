import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { State } from "./components/Display/State";
import { Display } from "./components/Display/Display";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { actions as worldActions } from "./world/slice";
import { Game } from "./Game/Game";
import { executeCode } from "./executeCode/executeCode";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import "@fortawesome/fontawesome-free/css/brands.css";

import {
  codeInputLabel,
  rulesExplanation,
  runCodeButtonLabel,
  successMessage,
} from "./locale/en/main.json";
import { useFPS } from "./world/useFPS";
import { useTicksPerFrame } from "./world/useTicksPerFrame";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import styled from "styled-components";

const Container = styled.div`
  & {
    display: grid;
    grid-template-columns: minmax(1rem, auto) minmax(0px, 768px) minmax(
        1rem,
        auto
      );
  }

  & main {
    grid-column-start: 2;
  }
`;

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
    <Container>
      <main>
        <div>{rulesExplanation}</div>
        {hasWon && <div>{successMessage}</div>}
        <Display state={state} />
        <form>
          <label>
            {codeInputLabel}
            <AceEditor
              value={code}
              mode="javascript"
              theme="monokai"
              onChange={(val) => {
                console.log(val);
                setCode(val);
              }}
              height="5rem"
              width="100%"
            />
          </label>
          <button onClick={runCode}>{runCodeButtonLabel}</button>
        </form>
        <ProjectDescription />
      </main>
    </Container>
  );
}

import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { Display } from "./components/Display/Display";
import React, { useContext, useEffect, useState } from "react";
import { actions as worldActions } from "./world/slice";
import { Game } from "./Game/Game";
import { executeCode } from "./executeCode/executeCode";

import "@fortawesome/fontawesome-free/css/brands.css";

import { rulesExplanation, successMessage } from "./locale/en/main.json";
import { useFPS } from "./world/useFPS";
import { useTicksPerFrame } from "./world/useTicksPerFrame";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import styled from "styled-components";
import { State } from "./store";
import { CodeEditor } from "./components/CodeEditor/CodeEditor";

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
  const { store } = useContext(ReactReduxContext);
  const hasWon = useSelector((state: State) => state.currentLevel.isCompleted);
  const [code, setCode] = useState(
    `const sleigh = game.sleighs[0];
const house = game.houses[0];
const positionOfHouse = house.position;
const someRandomPosition = { x: 300, y: 300 };
sleigh.moveTo(someRandomPosition);`
  );
  function runCode() {
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
        <Display />
        {hasWon && <div>{successMessage}</div>}
        <CodeEditor code={code} onCodeChange={setCode} onRun={runCode} />
        <ProjectDescription />
      </main>
    </Container>
  );
}

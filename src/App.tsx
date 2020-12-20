import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { Display } from "./components/Display/Display";
import React, { useContext, useEffect, useState } from "react";
import { actions as worldActions } from "./world/slice";
import { Game } from "./Game/Game";
import { executeCode } from "./executeCode/executeCode";

import { rulesExplanation, successMessage } from "./locale/en/main.json";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import styled from "styled-components";
import { State } from "./store";
import { CodeEditor } from "./components/CodeEditor/CodeEditor";
import { Pixel } from "./models/Pixel";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      worldActions.runGame({
        fps: 10,
        size: {
          width: 800 as Pixel,
          height: 400 as Pixel,
        },
        ticks: 0,
        ticksPerFrame: 10,
      })
    );
  }, [dispatch]);
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

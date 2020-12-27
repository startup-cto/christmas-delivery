import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { Display } from "./components/Display/Display";
import React, { useContext, useState } from "react";
import { actions as worldActions } from "./world/slice";
import { Game } from "./Game/Game";
import { executeCode } from "./executeCode/executeCode";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import styled from "styled-components";
import { CodeEditor } from "./components/CodeEditor/CodeEditor";
import { selectIsRunning } from "./world/selectors/selectIsRunning";
import { range } from "ramda";

function createCssStar({
  xPercent,
  yPercent,
  intensity,
}: {
  xPercent: number;
  yPercent: number;
  intensity: number;
}) {
  return `radial-gradient(
        circle at ${xPercent}% ${yPercent}%,
        #fff,
        #fff3 ${intensity * 2}px,
        transparent ${intensity * 10}px
      )`;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(1rem, auto) minmax(0px, 768px) minmax(
      1rem,
      auto
    );
  background: ${range(1, 70)
      .map(() => ({
        intensity: 0.5 + 0.5 * Math.random(),
        xPercent: Math.random() * 100,
        yPercent: Math.random() * 100,
      }))
      .map(createCssStar)
      .join(",")},
    linear-gradient(180deg, #242b4bee, #0b1026ee),
    linear-gradient(120deg, #161b36aa, #061d37aa),
    linear-gradient(240deg, #161b36aa, #061d37aa);

  & > main {
    grid-column-start: 2;
  }
`;

const EditArea = styled.div`
  background: linear-gradient(180deg, #2b0000, #160000 4rem, #160000);
  color: #ddd;
  border: 3px outset #b10000;
  box-shadow: 2rem;
  padding: 1rem;
`;

export function App() {
  const dispatch = useDispatch();
  const { store } = useContext(ReactReduxContext);
  const isRunning = useSelector(selectIsRunning);
  const [code, setCode] = useState(
    `// Find Santa's sleigh
const sleigh = game.sleighs[0];
// Find the only house in this level
const house = game.houses[0];
const positionOfHouse = house.position;
// Deliver presents... hopefully Santa doesn't get lost!
const someRandomPosition = { x: 300, y: 300 };
sleigh.moveTo(someRandomPosition);`
  );
  function runCode() {
    const game = new Game(store);
    executeCode(code, game);
    dispatch(worldActions.runGame());
  }

  return (
    <Container>
      <main>
        <Display />
        <EditArea>
          <CodeEditor
            code={code}
            onCodeChange={setCode}
            onRun={runCode}
            disabled={isRunning}
          />
          <ProjectDescription />
        </EditArea>
      </main>
    </Container>
  );
}

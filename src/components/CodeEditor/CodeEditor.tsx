import React, { FunctionComponent } from "react";
import { codeInputLabel, runCodeButtonLabel } from "../../locale/en/main.json";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import styled from "styled-components";

import "../../typography/mountainsOfChristmas.css";

const Heading = styled.h2`
  font-family: Mountains of Christmas;
  margin: 0;
`;

const ImportantButton = styled.button`
  background-color: #a00;
  border: none;
  color: #eee;
  padding: 0.5rem 1rem;

  &:hover,
  &:active {
    background-color: #c00;
  }
`;

export interface Props {
  code: string;
  disabled?: boolean;
  onCodeChange: (value: ((prevState: string) => string) | string) => void;
  onRun: () => void;
}

export const CodeEditor: FunctionComponent<Props> = ({
  disabled = false,
  onCodeChange,
  onRun,
  code,
}) => (
  <form>
    <label>
      <Heading>{codeInputLabel}</Heading>
      <AceEditor
        readOnly={disabled}
        value={code}
        mode="javascript"
        theme="monokai"
        onChange={onCodeChange}
        height="17rem"
        width="100%"
        setOptions={{
          useWorker: false,
        }}
        style={{
          margin: "1rem 0",
        }}
      />
    </label>
    <ImportantButton
      disabled={disabled}
      onClick={(event) => {
        event.preventDefault();
        onRun();
      }}
    >
      {runCodeButtonLabel}
    </ImportantButton>
  </form>
);

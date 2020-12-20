import React, { FunctionComponent } from "react";
import { codeInputLabel, runCodeButtonLabel } from "../../locale/en/main.json";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

interface Props {
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
      {codeInputLabel}
      <AceEditor
        readOnly={disabled}
        value={code}
        mode="javascript"
        theme="monokai"
        onChange={onCodeChange}
        height="5rem"
        width="100%"
        setOptions={{
          useWorker: false,
        }}
      />
    </label>
    <button
      disabled={disabled}
      onClick={(event) => {
        event.preventDefault();
        onRun();
      }}
    >
      {runCodeButtonLabel}
    </button>
  </form>
);

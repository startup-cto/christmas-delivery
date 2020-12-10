import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  codeInputLabel,
  runCodeButtonLabel,
  successMessage,
} from "./locale/en/main.json";
import { App } from "./App";
import { Provider } from "react-redux";
import { FunctionComponent } from "react";
import { createStore } from "./store";

const MockProvider: FunctionComponent = ({ children }) => (
  <Provider store={createStore()}>{children}</Provider>
);

describe("ConnectedApp", () => {
  it("shows a level complete message when running a viable solution", async () => {
    const solution = "game.sleighs[0].moveTo(game.houses[0].position)";
    const { findByLabelText, findByText } = render(<App />, {
      wrapper: MockProvider,
    });
    const codeBox = await findByLabelText(codeInputLabel);
    userEvent.clear(codeBox);
    userEvent.type(codeBox, solution);
    const runCodeButton = await findByText(runCodeButtonLabel);
    userEvent.click(runCodeButton);
    await new Promise((resolve) => setTimeout(resolve, 20000));
    expect(await findByText(successMessage)).toBeInTheDocument();
  }, 25000);

  it("does not show a level complete message when running no code at all", async () => {
    const { findByLabelText, findByText, queryByText } = render(<App />, {
      wrapper: MockProvider,
    });
    const codeBox = await findByLabelText(codeInputLabel);
    userEvent.clear(codeBox);
    const runCodeButton = await findByText(runCodeButtonLabel);
    userEvent.click(runCodeButton);
    expect(queryByText(successMessage)).not.toBeInTheDocument();
  });
});

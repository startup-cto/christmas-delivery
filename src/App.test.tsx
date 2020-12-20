import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  codeInputLabel,
  runCodeButtonLabel,
  successMessage,
} from "./locale/en/main.json";
import { App } from "./App";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { createStore } from "./store";
import { actions as worldActions } from "./world/slice";

function getMockProvider(store = createStore()) {
  return ({ children }: PropsWithChildren<unknown>) => (
    <Provider store={store}>{children}</Provider>
  );
}

describe("ConnectedApp", () => {
  it("shows a level complete message when running a viable solution", async () => {
    const solution = "game.sleighs[0].moveTo(game.houses[0].position)";

    const store = createStore();
    store.dispatch(
      worldActions.updateWorldState({
        fps: 100,
        ticksPerFrame: 1000,
      })
    );
    const { findByLabelText, findByText } = render(<App />, {
      wrapper: getMockProvider(store),
    });
    const codeBox = await findByLabelText(codeInputLabel, {
      exact: false,
    });
    userEvent.clear(codeBox);
    userEvent.paste(codeBox, solution);
    const runCodeButton = await findByText(runCodeButtonLabel);
    userEvent.click(runCodeButton);
    expect(await findByText(successMessage)).toBeInTheDocument();
  });

  it("does not show a level complete message when running no code at all", async () => {
    const { findByLabelText, findByText, queryByText } = render(<App />, {
      wrapper: getMockProvider(),
    });
    const codeBox = await findByLabelText(codeInputLabel, { exact: false });
    userEvent.clear(codeBox);
    const runCodeButton = await findByText(runCodeButtonLabel);
    userEvent.click(runCodeButton);
    expect(queryByText(successMessage)).not.toBeInTheDocument();
  });
});

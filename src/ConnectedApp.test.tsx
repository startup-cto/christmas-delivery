import ConnectedApp from "./ConnectedApp";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  codeInputLabel,
  runCodeButtonLabel,
  successMessage,
} from "./locale/en/main.json";
import assert from "assert";

describe("ConnectedApp", () => {
  it("shows a level complete message when running a viable solution", async () => {
    const solution = "game.sleighs[0].moveTo(game.houses[0].position)";
    const { findByLabelText, findByText } = render(<ConnectedApp />);
    const codeBox = await findByLabelText(codeInputLabel);
    userEvent.clear(codeBox);
    userEvent.type(codeBox, solution);
    const runCodeButton = await findByText(runCodeButtonLabel);
    userEvent.click(runCodeButton);
    expect(await findByText(successMessage)).toBeInTheDocument();
  });
});

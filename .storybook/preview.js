import { Provider } from "react-redux";
import { createStore } from "../src/store/store";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <Provider store={createStore()}>
      <Story />
    </Provider>
  ),
];

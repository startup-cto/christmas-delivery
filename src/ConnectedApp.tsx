import React from "react";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore } from "./store/store";

function ConnectedApp() {
  return (
    <Provider store={createStore()}>
      <App />
    </Provider>
  );
}

export default ConnectedApp;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DAppProvider } from "@usedapp/core";
import {RefreshContextProvider} from './contexts/RefreshContext'

ReactDOM.render(
  <React.StrictMode>
    <RefreshContextProvider>
      <DAppProvider config={{}}>
        <App />
      </DAppProvider>
    </RefreshContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "https://node-lambda.muzzamil75.now.sh/";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

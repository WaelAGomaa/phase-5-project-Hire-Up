import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
// import actioncable from "actioncable";

const cableApp = {};
// cableApp.cable = actioncable.createConsumer("ws://localhost:3000/cable");

ReactDOM.render(
  <Router>
    <App cableApp={cableApp} />
  </Router>,
  document.getElementById("root")
);

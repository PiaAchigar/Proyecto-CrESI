import React from "react";
import ReactDOM from "react-dom";

//Reset CSS
import "./index.scss";

//Componentes
import App from "./App";

//Ruteador
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

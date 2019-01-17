import React from "react";
import ReactDOM from "react-dom";
import DashBoard from "./dashboard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <DashBoard />
    </div>
  );
}

const rootElement = document.getElementById(
  "root"
);
ReactDOM.render(<App />, rootElement);

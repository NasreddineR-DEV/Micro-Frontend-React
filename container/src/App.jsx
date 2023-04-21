import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import { Counter2 } from 'counter2/Counter2';
import "./index.css";
const App = () => (
  <div style={{ border: "2px solid red" , marginBottom: "8px" , marginLeft: "8px", marginRight: "8px"}}>
    <h1>Container Micro frontend</h1>
    <Counter />
    <Counter2 />


  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
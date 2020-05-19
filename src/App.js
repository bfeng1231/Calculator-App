import React from "react";
import "./styles.css";
import Calculator from "./components/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <Calculator />
    </div>
  );
}

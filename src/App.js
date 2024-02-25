import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleAppend = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      if (input === "") {
        setResult("Error");
      } else {
        const output = eval(input);
        if (isNaN(output)) {
          setResult("NaN");
        } else if (!isFinite(output)) {
          setResult("Infinity");
        } else {
          setResult(output);
        }
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <h1 className="h1">React Calculator</h1>
      <div className="calculator">
        <input type="text" className="input-field" value={input} readOnly />
        <div className="result">{result}</div>
        <div className="buttons">
          <button onClick={() => handleAppend("7")}>7</button>
          <button onClick={() => handleAppend("8")}>8</button>
          <button onClick={() => handleAppend("9")}>9</button>
          <button onClick={() => handleAppend("+")}>+</button>
          <button onClick={() => handleAppend("4")}>4</button>
          <button onClick={() => handleAppend("5")}>5</button>
          <button onClick={() => handleAppend("6")}>6</button>
          <button onClick={() => handleAppend("-")}>-</button>
          <button onClick={() => handleAppend("1")}>1</button>
          <button onClick={() => handleAppend("2")}>2</button>
          <button onClick={() => handleAppend("3")}>3</button>
          <button onClick={() => handleAppend("*")}>*</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleAppend("0")}>0</button>
          <button onClick={() => handleAppend("/")}>/</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;

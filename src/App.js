import "./styles.css";
import { useState } from "react";

export default function App() {
  var [year, setYear] = useState(0);
  var [result, setResult] = useState(" ");
  function inputHandler(event) {
    year = event.target.value;
    setYear(year);
  }

  function clickHandler() {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
      result = "Yes, it is a leap year!";
    else {
      result = "No, it is not a leap year.";
    }
    setResult(result);
  }
  return (
    <div className="App">
      <h1>leap year checker</h1>
      <h2> Enter the number : </h2>
      <input onChange={inputHandler} /> <br />
      <button class="check-button" onClick={clickHandler}>
        {" "}
        Check!
      </button>
      <div class="result-display">{result}</div>
    </div>
  );
}

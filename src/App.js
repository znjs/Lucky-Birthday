import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [d, updateD] = useState("");
  const [luckNum, updateLuckNum] = useState("");
  const [output, updateOutput] = useState(false);
  const [result, updateResult] = useState("");
  const [notice, updateNotice] = useState(true);

  function generateResult() {
    var nums = d.split("-").join("");
    // console.log(nums);
    var t = 0;
    for (var i = 0; i < nums.length; i++) {
      t = t + Number(nums[i]);
    }
    console.log(t);
    if (t % luckNum === 0) {
      updateResult("Hurray!!You are a lucky person!");
    } else {
      updateResult("Oops!!Your birthday is not a lucky number!");
    }
    if (luckNum === "") {
      updateResult("Please enter your lucky number");
    }
    updateOutput(true);
  }
  return (
    <div className="App">
      {notice ? (
        <div className={"privacy"}>
          <p>
            <strong>Privacy Notice!</strong> We are not storing your data.
            <span>&nbsp;</span>
            <span
              className={"cross"}
              onClick={() => {
                updateNotice(false);
              }}
            >
              ×
            </span>
          </p>
        </div>
      ) : null}

      <h1>Is Your Birthday Lucky?</h1>
      <h2>Enter Your Birthdate and lucky number to continue...</h2>
      <h3>Select your Birth date:</h3>
      <input
        type="date"
        onChange={(event) => {
          updateD(event.target.value);
        }}
      ></input>
      <br></br>
      <h3>Enter your Lucky Number:</h3>
      <input
        type="number"
        onChange={(event) => {
          updateLuckNum(event.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={generateResult}>check</button>
      {output ? <h3>{result}</h3> : null}
    </div>
  );
}

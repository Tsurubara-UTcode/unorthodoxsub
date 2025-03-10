import React, { useState } from "react";
import "./App.css";

const scoreValues = [5, 10,15, 20, 25, 35];

const App = () => {
  const [score, setScore] = useState(0);
  const [playerNames, setPlayerNames] = useState(["", ""]);

  const handleScoreChange = (value: number) => {
    setScore((prev) => prev + value);
  };

  const handleReset = () => {
    setScore(0);
  };

  

  return (
    <div className="app-container">
      <div className="name-inputs">
          <input
            type="text"
            value={name}
            placeholder={"PL"}
            onChange={(e) => setPlayerNames( e.target.value)}
          />
      </div>
      <div className="score-display">{score} pt</div>
      <button type="button" className="reset-button" onClick={handleReset}>リセット</button>
      <div className="button-container">
        {scoreValues.map((value, index) => (
          <button type="button"
            key={value}
            className="score-button"
            onClick={() => handleScoreChange(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

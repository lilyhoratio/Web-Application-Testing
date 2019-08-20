import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const clearBoth = () => {
    setStrikes(0)
    setBalls(0)
  }

  const scoreStrike = () => {
    if (strikes === 2) {
      clearBoth()
    } else {
      setStrikes(strikes + 1)
    }
  }

  const scoreBall = () => {
    if (balls === 3) {
      clearBoth()
    } else {
      setBalls(balls + 1)
    }
  }

  const scoreFoul = () => {
    if (strikes !== 2) {
      setStrikes(strikes + 1)
    }
  }

  const scoreHit = () => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard strike={scoreStrike} ball={scoreBall} hit={scoreHit} foul={scoreFoul} />
    </div >
  );
}

export default App;

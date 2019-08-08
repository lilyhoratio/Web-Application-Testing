import React from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }
}

export default App;

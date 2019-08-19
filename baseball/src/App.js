import React from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Display balls={3} strikes={2} />
      <Dashboard strike={() => console.log('strike!!!')} />
    </div >
  );
}

export default App;

import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("props", props);
  }
  render() {
    return (
      <div className="display">
        <div>
          <h2>Ball Count</h2>
          <p>Count: </p>
        </div>
        <div>
          <h2>Strike Count</h2>
          <p>Count: </p>
        </div>
      </div>
    );
  }
}

export default Display;

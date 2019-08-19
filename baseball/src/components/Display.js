import React from "react";

const Display = ({ balls, strikes }) => {
  console.log("balls", balls);
  console.log("strikes", strikes);

  return (
    <div className="display">
      <div>
        <h2>Ball Count: {balls}</h2>
      </div>
      <div>
        <h2>Strike Count: {strikes}</h2>
      </div>
    </div>
  );
}

export default Display;

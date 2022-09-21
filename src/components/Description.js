import React from "react";

function Description({ description }) {
  return (
    <div>
      <strong>Description: </strong>
      {description}

      <p>Available: yes</p>
    </div>
  );
}

export default Description;

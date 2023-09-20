import React from "react";

function Button({ value, color }) {
  return <button style={{ backgroundColor: color }}>{value}</button>;
}

export default Button;

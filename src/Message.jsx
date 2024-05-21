import { useState } from "react";

export default function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
  const changeColor = () => setColor("red");

  return <div onClick={changeColor} style={{
    background: color
  }}>{color}</div>
}

import { useState } from "react";

export default function Article({ number }) {
  console.log("📄 Render Article Component!");

  const [renderNumber, setRenderNumber] = useState(number);
  const addNumber = () => {
    setRenderNumber(renderNumber + 1);
  };

  return (
    <p>
      {renderNumber}
      <button onClick={addNumber}>+</button>
    </p>
  );
}

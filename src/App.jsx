import { useState } from "react";
import Message from "./Message";

function App() {
  const [messageColor, setMessageColor] = useState("blue");
  const changeColor = () => {
    setMessageColor("yellow");
  };

  return (
    <>
      <button onClick={changeColor}>messageColor변경</button>
      <Message messageColor={messageColor} />
    </>
  );
}

export default App;

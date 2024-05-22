import { useState } from "react";

export default function Child() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      Child
      <button onClick={handleClick}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && "추가내용쌸라쌸라"}
    </div>
  );
}
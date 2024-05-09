import { useContext } from "react";
import { DiceContext } from "../StateComponent";

function LocalThree() {
  console.log("🎨 Local Three render!");

  const dice = useContext(DiceContext);
  const diceArrString = dice.map((v) => `🎲 ${v}`).join(" ");

  return (
    <>
      <h3>Local Three</h3>
      <div>{diceArrString}</div>
    </>
  );
}

export default LocalThree;

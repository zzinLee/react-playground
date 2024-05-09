import { useContext } from "react";
import { DiceContext } from "../StateComponent"; 

function LocalThree() {
  console.log("🎨 Local Three render!");

  //여기에서 useContext를 호출하여 value를 꺼내씁니다.
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

import { useContext } from "react";
import { DiceContext } from "../StateComponent";

function LocalOne() {
  console.log("🎨 Local One render!");

  //여기에서 useContext를 호출하여 value를 꺼내씁니다.
  const dice = useContext(DiceContext);
  const diceList = dice.map((v, i) => <li key={i}>{v}</li>);

  return (
    <>
      <h2>localOne</h2>
      <ul>{diceList}</ul>
    </>
  );
}

export default LocalOne;

import { useContext, memo } from "react";
import { DiceContext } from "../StateComponent";

function LocalOne() {
  console.log("🎨 Local One render!");

  const dice = useContext(DiceContext);
  const diceList = dice.map((v, i) => <li key={i}>{v}</li>);

  return (
    <>
      <h2>localOne</h2>
      <ul>{diceList}</ul>
    </>
  );
}

const MemoizedLocalOne = memo(LocalOne);

export default MemoizedLocalOne;

import { useState } from "react";

import LocalOne from "../LocalOne";
import LocalTwo from "../LocalTwo";

import { diceResult } from "../utils";

function StateComponent() {
  const initaialDiceResult = diceResult();
  const [dice, setDice] = useState(initaialDiceResult);

  const replay = (ev) => { //re-rendering 을 촉진시키는 함수.
    ev.preventDefault();

    const resettedDice = diceResult();

    setDice(resettedDice);
  };

  return (
    <>
      <LocalOne dice={dice} />
      <div>
        <LocalTwo dice={dice} />
        <button onClick={replay}>replay</button>
      </div>
    </>
  );
}

export default StateComponent;

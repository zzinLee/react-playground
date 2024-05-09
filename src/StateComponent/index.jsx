import { useState, createContext } from "react";

import LocalOne from "../LocalOne";
import LocalTwo from "../LocalTwo";
import LocalThree from "../LocalThree";

import { diceResult } from "../utils";

export const DiceContext = createContext(diceResult());

function StateComponent() {
  const initaialDiceResult = diceResult();
  const [dice, setDice] = useState(initaialDiceResult);

  const replay = (ev) => { //re-rendering 을 촉진시키는 함수.
    ev.preventDefault();

    const resettedDice = diceResult();

    setDice(resettedDice);
  };

  return (
    //DiceContext.Provider가 value로 dice를 전달하므로 depth에 관계없이, 어디에서든 useContext를 통해 호출할 수 있습니다.
    <DiceContext.Provider value={dice}>
      This is Where StateComponent is!
      <LocalOne />
      <div>
        <LocalTwo />
        <LocalThree />
        <button onClick={replay}>replay</button>
      </div>
    </DiceContext.Provider>
  );
}

export default StateComponent;

//1. createContext를 import 합니다.
import { useState, createContext } from "react";

import LocalOne from "../LocalOne";
import LocalTwo from "../LocalTwo";

import { diceResult } from "../utils";

//2. 컴포넌트 외부에 최초전달할 값을 인자로 삼는 createContext를 호출하고, 컨텍스트를 생성합니다.
export const DiceContext = createContext("최초값");

function StateComponent() {
  const initaialDiceResult = diceResult();
  //전달하고자 하는 상태는 그대로 정의합니다.
  const [dice, setDice] = useState(initaialDiceResult);

  const replay = (ev) => { //re-rendering 을 촉진시키는 함수.
    ev.preventDefault();

    const resettedDice = diceResult();

    setDice(resettedDice);
  };

  return (
    //3. DiceContext.Provider로 감싸고 value 값에 원하는 상태값을 전달합니다.
    //하위컴포넌트가 어디에 있어도 Provider가 value를 제공합니다.
    <DiceContext.Provider value={dice}>
      <LocalOne />
      <div>
        <LocalTwo />
        <button onClick={replay}>replay</button>
      </div>
    </DiceContext.Provider>
  );
}

export default StateComponent;

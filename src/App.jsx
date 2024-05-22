import { useState } from "react";

import Child from "./Child";

export default function App() {
  //상태를 끌어올립니다.
  const childrenArray = new Array(3).fill(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const childrenElemArray = childrenArray.map((_, index) => (
    <Child
      index={index}
      changeOpenIndex={setSelectedIndex}
      openIndex={selectedIndex}
      key={`child_${index}`}
    />
  ));

  return (
    <div>
      상태를 공유하는 가장 가까운 부모컴포넌트입니다. <br></br>
      {childrenElemArray}
    </div>
  );
}

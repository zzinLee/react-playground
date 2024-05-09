import { memo } from "react";
import LocalThree from "../LocalThree";

function LocalTwo() {
  console.log("🎨 Local Two render!");

  return (
    <>
      <h2>Local Two</h2>
      <p>{"I don't want to Rerender this"}</p>
      <LocalThree />
    </>
  );
}

const MemoizedLocalTwo = memo(LocalTwo);

export default MemoizedLocalTwo;

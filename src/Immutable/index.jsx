import { memo } from "react";

function Immutable({ value, onClick }) {
  console.log("💎 Immutable Render");

  return (
    <div onClick={onClick} style={{ backgroundColor: "blue", width: "300px" }}>
      {value}
    </div>
  );
}

const MemoizedImmutable = memo(Immutable);

export default MemoizedImmutable;

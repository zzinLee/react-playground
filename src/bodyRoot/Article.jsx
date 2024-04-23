import { useState, memo, useCallback } from "react";

function Article({ number }) {
  console.log("📄 Render Article Component!");

  const [renderNumber, setRenderNumber] = useState(number);
  const addNumber = useCallback(() => {
    setRenderNumber(renderNumber + 1);
  },[renderNumber]);

  return (
    <p>
      {renderNumber}
      <button onClick={addNumber}>+</button>
    </p>
  );
}

// const MemoArticle = memo(Article);
// export default MemoArticle;
export default Article;
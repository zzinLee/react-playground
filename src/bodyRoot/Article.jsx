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

//아래의 주석 2줄을 해제 하면 memo된 Article 을 사용해 볼 수 있습니다. 이때 export default Artilce; 은 주석 처리해주세요.
// const MemoArticle = memo(Article);
// export default MemoArticle;

export default Article;

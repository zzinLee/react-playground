import { useState } from "react";

import ArticleList from "./ArticleList";

export default function BodyComponent() {
  console.log("👔 Body Root Render!");

  const [isRefresh, setIsRefresh] = useState(false);
  const handleButton = () => {
    setIsRefresh(!isRefresh);
  };

  return (
    <div>
      this is document body
      <ArticleList />
      <button onClick={handleButton}>{`isRefresh: ${isRefresh}`}</button>
    </div>
  );
}

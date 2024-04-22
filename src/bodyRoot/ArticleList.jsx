import Article from "./Article";

export default function ArticleList() {
  console.log("🗞️ Render Article List Component!");

  const numberList = [1, 2, 3, 4, 5];
  const numberElemList = numberList.map((val, index) => {
    return (
      <li key={`key_${index}`}>
        <Article number={val} />
      </li>
    );
  });

  return <ul>{numberElemList}</ul>;
}

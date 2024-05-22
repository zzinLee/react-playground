export default function Child({ index, changeOpenIndex, openIndex }) {
  const isOpen = index === openIndex;
  const handleClick = () => {
    changeOpenIndex(index);
  };

  return (
    <div>
      Child
      <button onClick={handleClick}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && "추가내용쌸라쌸라"}
    </div>
  );
}

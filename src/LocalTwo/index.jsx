import LocalThree from "../LocalThree";

function LocalTwo({ dice }) {
  console.log("🎨 Local Two render!");

  return (
    <>
      <h2>Local Two</h2>
      <p>{"I don't want to Rerender this"}</p>
      <LocalThree dice={dice} />
    </>
  );
}

export default LocalTwo;

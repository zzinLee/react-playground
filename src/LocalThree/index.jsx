function LocalThree({ dice }) {
  console.log("🎨 Local Three render!");

  const diceArrString = dice.map((v) => `🎲 ${v}`).join(" ");

  return (
    <>
      <h3>Local Three</h3>
      <div>{diceArrString}</div>
    </>
  );
}

export default LocalThree;

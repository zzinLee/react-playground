function LocalOne({ dice }) {
  console.log("🎨 Local One render!");

  const diceList = dice.map((v, i) => <li key={i}>{v}</li>);

  return (
    <>
      <h2>localOne</h2>
      <ul>{diceList}</ul>
    </>
  );
}

export default LocalOne;

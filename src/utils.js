const randomize = () => {
    return Math.random() * 10;
  };

const diceResult = () => {
  const dices = new Array(5).fill(0).map(() => Math.round(randomize()));

  return dices;
};

export { diceResult };


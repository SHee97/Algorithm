const solution = (board, moves) => {
  const len = board.length;
  const reversed = board.reverse();
  const lines = [];
  const basket = [];
  let answer = 0;

  for (let i = 0; i < len; i++) {
    const line = [];

    for (let j = 0; j < len; j++) {
      const item = reversed[j][i];

      if (item > 0) line.push(item);
    }

    lines.push(line);
  }

  moves.forEach((move) => {
    const item = lines[move - 1].pop();
    const lastBasketItem = basket.pop();

    if (!lastBasketItem) {
      basket.push(item);
      return;
    } else if (!item) {
      basket.push(lastBasketItem);
    }

    if (lastBasketItem === item) {
      answer += 2;
      return;
    }

    basket.push(lastBasketItem);
    basket.push(item);
  });

  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

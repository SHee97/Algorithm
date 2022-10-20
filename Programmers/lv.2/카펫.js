function solution(brown, yellow) {
  const totalSize = brown + yellow;
  let [width, height] = [totalSize, 1];

  for (let i = 3; i < totalSize / 2; i++) {
    if (totalSize % i) continue;

    width = totalSize / i;
    height = i;

    const yellowSize = (width - 2) * (height - 2);

    if (yellow === yellowSize) {
      return [width, height];
    }
  }
}

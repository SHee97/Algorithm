const triangle = (a, b, c) => {
  const side = [a, b, c].sort((a, b) => a - b);

  if (side[0] + side[1] > side[2]) return "YES";
  return "NO";
};

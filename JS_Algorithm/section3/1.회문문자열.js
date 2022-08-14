const wooYoungWoo = (str) => {
  const lower = str.toLowerCase();
  const reverse = lower.split("").reverse().join("");

  if (lower === reverse) {
    return "YES";
  }

  return "NO";
};

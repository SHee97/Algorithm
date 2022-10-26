const solution = (str) => {
  const stack = [];

  for (let s of str) {
    if (s === "(") {
      stack.push(s);
    } else {
      if (stack.length < 1) return "NO";

      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

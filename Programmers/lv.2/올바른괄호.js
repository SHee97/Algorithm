function solution(s) {
  const stack = [];

  for (let e of s) {
    if (e === "(") {
      stack.push(e);
    } else if (e === ")" && stack.length) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length) return false;

  return true;
}

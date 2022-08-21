const compression = (str) => {
  let answer = [];
  let repeat = 1;

  for (let i = 0; i < str.length; i++) {
    if (i === str.length || str[i] !== str[i + 1]) {
      const result = str[i] + (repeat > 1 ? repeat : "");
      answer.push(result);
      repeat = 1;
    } else {
      repeat++;
    }
  }

  return answer.join("");
};

console.log(compression("KKEESKKKKKAAAA"));

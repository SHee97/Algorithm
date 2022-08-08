const removeDuplicate = (input) => {
  const answer = [];

  for (let word of input) {
    if (!answer.includes(word)) {
      answer.push(word);
    }
  }

  return answer.join("\n");
};

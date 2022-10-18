function solution(numbers) {
  const sum = numbers.reduce((acc, el) => acc + el, 0);
  return sum / numbers.length;
}

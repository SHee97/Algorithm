function solution(people, limit) {
  let answer = 0;

  const sorted = people.sort((a, b) => a - b);

  let left = 0;
  let right = sorted.length - 1;

  while (left <= right) {
    if (left === right) {
      answer++;
      break;
    }

    if (sorted[left] + sorted[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }

    answer++;
  }

  return answer;
}

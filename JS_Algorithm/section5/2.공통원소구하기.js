const solution = (N, arr1, M, arr2) => {
  const answer = [];

  const arrA = arr1.sort((a, b) => a - b);
  const arrB = arr2.sort((a, b) => a - b);

  let indexA = 0;
  let indexB = 0;

  while (indexA < arrA.length && indexB < arrB.length) {
    if (arrA[indexA] < arrB[indexB]) {
      indexA++;
    } else if (arrA[indexA] > arrB[indexB]) {
      indexB++;
    } else {
      answer.push(arrA[indexA]);
      indexA++;
      indexB++;
    }
  }

  return answer;
};

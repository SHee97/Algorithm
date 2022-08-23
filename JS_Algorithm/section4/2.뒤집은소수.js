const reversePrime = (arr) => {
  const answer = [];

  for (let num of arr) {
    const reversed = +num.toString().split("").reverse().join("");

    if (checkPrime(reversed)) {
      answer.push(reversed);
    }
  }

  function checkPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  return answer.join(" ");
};

console.log(reversePrime([32, 55, 62, 20, 250, 370, 200, 30, 100]));

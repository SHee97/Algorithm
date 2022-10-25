const solution = (n, m) => {
  let answer = 0;

  for (let i = 0; i < n.length - 2; i++) {
    const part = n.slice(i, i + 3);
    console.log(part);

    if (findAnagram(part, m)) {
      answer++;
    }
  }

  return answer;

  function findAnagram(A, B) {
    const str1 = A.split("");
    const str2 = B.split("");
    const map1 = new Map();
    const map2 = new Map();

    for (let a of str1) {
      if (map1.has(a)) map1.set(a, map1.get(a));
      else map1.set(a, 1);
    }

    for (let b of str2) {
      if (map2.has(b)) map2.set(b, map2.get(b));
      else map2.set(b, 1);
    }

    for (let [key, value] of map1) {
      if (!map2.has(key)) return false;
      if (value !== map2.get(key)) return false;
    }

    for (let [key, value] of map2) {
      if (!map1.has(key)) return false;
      if (value !== map1.get(key)) return false;
    }

    return true;
  }
};

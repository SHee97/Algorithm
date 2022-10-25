const solution = (n, m) => {
  const str1 = n.split("");
  const str2 = m.split("");

  const map1 = new Map();
  const map2 = new Map();

  let answer;

  str1.forEach((e) => {
    if (map1.has(e)) map1.set(e, map1.get(e) + 1);
    else map1.set(e, 1);
  });

  str2.forEach((e) => {
    if (map2.has(e)) map2.set(e, map2.get(e) + 1);
    else map2.set(e, 1);
  });

  for (let [key, value] of map1) {
    if (!map2.has(key)) return "NO";
    if (value !== map2.get(key)) return "NO";
  }

  for (let [key, value] of map2) {
    if (!map1.has(key)) return "NO";
    if (value !== map1.get(key)) return "NO";
  }

  return "YES";
};

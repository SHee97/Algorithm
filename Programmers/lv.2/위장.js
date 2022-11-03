function solution(clothes) {
  const closet = clothes.reduce((map, [name, type]) => {
      if (map.has(type)) {
          map.set(type, map.get(type) + 1);
          return map;
      }
      
      return map.set(type, 1);
  }, new Map());
  
  let answer = 1;
  
  for (let [type, count] of closet) {
      answer *= count + 1;
  }
  
  return answer - 1;
}
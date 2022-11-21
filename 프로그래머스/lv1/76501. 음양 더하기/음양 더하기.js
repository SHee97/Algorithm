function solution(absolutes, signs) {
    const result = absolutes.map((e, i) => {
        return signs[i] ? e : e * -1;
    });
    
    return result.reduce((acc, e) => acc + e, 0);
}
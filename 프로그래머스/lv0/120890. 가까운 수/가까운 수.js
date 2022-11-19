function solution(array, n) {
    let answer = Infinity;
    
    for (let e of array) {
        if (Math.abs(e - n) < Math.abs(answer - n)) {
            answer = e;
        } else if (Math.abs(e - n) === Math.abs(answer - n)) {
            answer = Math.min(answer, e);
        }
    }
    
    return answer;
}
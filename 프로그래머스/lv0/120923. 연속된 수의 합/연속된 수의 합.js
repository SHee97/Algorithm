function solution(num, total) {
    const n = Math.ceil(total / num);
    const start = num % 2 ? n - Math.floor(num / 2) : n - (num / 2);
    const answer = [];
    
    for (let i = 0; i < num; i++) {
        answer.push(start + i);
    }
    
    return answer;
}
function solution(my_string, n) {
    const answer = [];
    
    for (let i of my_string) {
        answer.push(i.repeat(n));
    }
    
    return answer.join('');
}
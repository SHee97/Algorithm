function solution(s, n) {
    const str = s.split('');
    const answer = [];
    
    for (let c of str) {
        if (c === " ") {
            answer.push(c);
            continue;
        }
        
        let code = c.charCodeAt() + (n % 26);
        let lastCode = c.toUpperCase() === c ? 90 : 122;
        
        if (code > lastCode) {
            code -= 26;
        }
        
        answer.push(String.fromCharCode(code));
    }
    
    return answer.join('');
}
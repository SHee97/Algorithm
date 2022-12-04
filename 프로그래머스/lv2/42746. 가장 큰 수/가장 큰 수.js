function solution(numbers) {
    const answer = numbers.map(e => e.toString()).sort((a, b) => {
        const A = a + b;
        const B = b + a;
        
        return +(B) - +(A);
    });
    
    return (BigInt(answer.join(''))).toString();
}
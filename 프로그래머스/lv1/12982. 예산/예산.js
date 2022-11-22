function solution(d, budget) {
    const demand = d.sort((a, b) => a - b);
    let remain = budget;
    let answer = 0;
    
    for (let i = 0; i < demand.length; i++) {
        if (budget - demand[i] >= 0) {
            budget -= demand[i];
            answer = i + 1;
            continue;
        }
        
        break;
    }
    
    return answer;
}
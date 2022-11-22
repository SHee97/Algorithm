function solution(a, b) {
    const [small, big] = [a, b].sort((a, b) => a - b);
    
    if ((big - small) % 2) {
        return Math.ceil((big - small) / 2) * (big + small);
    } else {
        return Math.floor((big - small) / 2) * (big + small) + ((big + small) / 2);
    }
}
function solution(s) {
    const words = s.split(' ');
    
    return words.map(w => {
        return w.split('').map((c, i) => {
            return i % 2 ? c.toLowerCase() : c.toUpperCase();
        }).join('');
    }).join(' ');
}
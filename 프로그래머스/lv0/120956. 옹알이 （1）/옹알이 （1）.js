function solution(babbling) {
    const baby = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    
    for (let bab of babbling) {
        let word = '';
        let possible = true;
        for (let i = 0; i < bab.length; i++) {
            word += bab[i];
            
            if (baby.includes(word)) {
                word = '';
                continue;
            }
            
            if (i === bab.length - 1) possible = false;
        }
        
        if (possible) answer++;
    }
    
    return answer;
}
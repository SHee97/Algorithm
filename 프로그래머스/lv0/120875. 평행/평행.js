function solution(dots) {
    const gradients = [];
    
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const g = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);
            
            if (gradients.includes(g)) {
                return 1;
            } else {
                gradients.push(g);
            }
        }
    }
    
    return 0;
}
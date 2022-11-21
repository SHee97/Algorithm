function solution(sizes) {
    let width = 0;
    let height = 0;
    
    sizes.forEach(size => {
        const [max, min] = [Math.max(...size), Math.min(...size)];
        
        width = Math.max(width, max);
        height = Math.max(height, min);
    });
    
    return width * height;
}
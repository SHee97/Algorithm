function solution(order) {
    return order.toString().split('').reduce((acc, e) => {
        if (!+e) return acc;
        
        return +e % 3 ? acc : acc + 1;
    }, 0);
}
function solution(phone_number) {
    return phone_number.split('').map((e, i) => {
        if (i < phone_number.length - 4) return '*';
        
        return e;
    }).join('');
}
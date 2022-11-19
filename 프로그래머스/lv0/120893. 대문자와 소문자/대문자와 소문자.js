function solution(my_string) {
    return my_string.split('').map(e => e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase()).join('');
}
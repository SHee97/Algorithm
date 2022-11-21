function solution(a, b) {
    const idx = new Date(`2016-${a}-${b}`).getDay();
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    return days[idx];
}
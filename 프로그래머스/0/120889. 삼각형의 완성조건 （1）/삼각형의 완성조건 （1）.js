function solution(sides) {
    let max = Math.max(...sides);                  
    let sum = sides.reduce((a, b) => a + b, 0);    //세 변의 합
    
    return (sum - max > max) ? 1 : 2;
}

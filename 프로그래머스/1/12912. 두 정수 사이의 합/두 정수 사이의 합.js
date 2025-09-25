function solution(a, b) {
   let min = Math.min(a,b)
   let max = Math.max(a,b)
   let count = max - min + 1;
    return (min + max)* count/2;
}
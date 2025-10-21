function solution(arr, divisor) {
    let answer = arr.filter(num => num % divisor === 0);
    
    // 나누어 떨어지는 원소가 없다면 [-1] 반환
    if (answer.length === 0) return [-1];
    
    return answer.sort((a, b) => a - b);
}

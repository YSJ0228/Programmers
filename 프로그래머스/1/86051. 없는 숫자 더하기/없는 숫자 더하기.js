function solution(numbers) {
    // 0~9까지의 합은 45
    const total = 45;
    
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    // 없는 숫자들의 합 반환
    return total - sum;
}

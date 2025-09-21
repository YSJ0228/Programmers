function solution(numbers) {
    // 배열의 모든 원소 합 구하기
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    // 평균 계산
    const avg = sum / numbers.length;
    
    return avg;
}

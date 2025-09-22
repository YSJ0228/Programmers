function solution(arr) {
    // 배열의 합 구하기
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    
    // 평균값 반환
    return sum / arr.length;
}

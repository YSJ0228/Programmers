function solution(array) {
    // 1. 배열을 오름차순 정렬
    array.sort((a, b) => a - b);
    
    // 2. 중앙 인덱스 구하기
    const mid = Math.floor(array.length / 2);
    
    // 3. 중앙값 반환
    return array[mid];
}

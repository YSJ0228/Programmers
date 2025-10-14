function solution(emergency) {
    // 응급도를 내림차순으로 정렬한 배열
    const sorted = [...emergency].sort((a,b) => b-a);
    
    // 원래 배열(emergency)에서 각 요소의 순위를 찾아 반환
    return emergency.map(v=>sorted.indexOf(v) +1);
} 
function solution(s) {
    const arr = s.split(' ').map(Number); // 문자열을 공백 기준으로 나누고 숫자 배열로 변환
    const min = Math.min(...arr);         // 최소값
    const max = Math.max(...arr);         // 최대값

    return `${min} ${max}`;               // 형식에 맞게 반환
}

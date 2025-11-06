function solution(n) {
    var answer = 0;
    
    // 숫자를 문자열로 변환 후, 각 자리수를 순회하며 더하기
    n.toString().split('').forEach(num => {
        answer += Number(num);
    });

    return answer;
}

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {   
            answer += i;     // 약수를 더해준다
        }
    }
    return answer;
}

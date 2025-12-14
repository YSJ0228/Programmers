function solution(A, B) {
    let answer = 0;

    // A는 오름차순
    A.sort((a, b) => a - b);
    // B는 내림차순
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}

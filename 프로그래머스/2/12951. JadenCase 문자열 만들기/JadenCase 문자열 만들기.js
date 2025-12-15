function solution(s) {
    let answer = '';
    let isStart = true; // 단어의 시작 여부

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === ' ') {
            answer += char;
            isStart = true;
        } else {
            if (isStart) {
                answer += char.toUpperCase();
                isStart = false;
            } else {
                answer += char.toLowerCase();
            }
        }
    }

    return answer;
}

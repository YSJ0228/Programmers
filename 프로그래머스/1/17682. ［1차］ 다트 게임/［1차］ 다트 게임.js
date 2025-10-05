function solution(dartResult) {
    let scores = []; 
    let regex = /(\d+)([SDT])([*#]?)/g; 
    // (\d+) : 숫자
    // ([SDT]) : S, D, T 중 하나
    // ([*#]?) : *, # 중 하나 또는 없음

    let matches = [...dartResult.matchAll(regex)];

    for (let i = 0; i < matches.length; i++) {
        let [_, num, bonus, option] = matches[i];
        let score = Number(num);

        if (bonus === "D") score = Math.pow(score, 2);
        else if (bonus === "T") score = Math.pow(score, 3);

        // 옵션 적용
        if (option === "*") {
            score *= 2;
            if (i > 0) scores[i - 1] *= 2; 
        } else if (option === "#") {
            score *= -1;
        }

        scores.push(score);
    }

    return scores.reduce((a, b) => a + b, 0);
}

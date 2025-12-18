function solution(s) {
    let transformCount = 0; // 이진 변환 횟수
    let removedZeroCount = 0; // 제거된 0의 총 개수

    while (s !== "1") {
        transformCount++;

        // 1️⃣ 0 제거
        const zeroCount = s.split("").filter(ch => ch === "0").length;
        removedZeroCount += zeroCount;

        // 2️⃣ 1만 남긴 길이
        const oneCount = s.length - zeroCount;

        // 3️⃣ 길이를 2진수로 변환
        s = oneCount.toString(2);
    }

    return [transformCount, removedZeroCount];
}

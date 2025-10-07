function solution(survey, choices) {
  // 1️⃣ 성격 유형 점수를 담을 객체 생성
  const scores = {
    R: 0, T: 0,
    C: 0, F: 0,
    J: 0, M: 0,
    A: 0, N: 0
  };

  // 2️⃣ survey와 choices를 순회하면서 점수 계산
  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i]; // 예: "RT" → disagree='R', agree='T'
    const choice = choices[i];

    // 4 → 모르겠음 → 점수 없음
    if (choice === 4) continue;

    // 1~3 → 비동의 쪽 점수, 5~7 → 동의 쪽 점수
    const score = Math.abs(choice - 4);

    if (choice < 4) {
      // 비동의 선택 → 왼쪽 유형 점수 증가
      scores[disagree] += score;
    } else {
      // 동의 선택 → 오른쪽 유형 점수 증가
      scores[agree] += score;
    }
  }

  // 3️⃣ 각 지표별 비교 후 결과 조합
  let result = '';
  result += scores.R >= scores.T ? 'R' : 'T';
  result += scores.C >= scores.F ? 'C' : 'F';
  result += scores.J >= scores.M ? 'J' : 'M';
  result += scores.A >= scores.N ? 'A' : 'N';

  return result;
}

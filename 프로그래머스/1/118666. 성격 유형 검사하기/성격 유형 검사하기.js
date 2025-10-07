function solution(survey, choices) {
  const scores = {
    R: 0, T: 0,
    C: 0, F: 0,
    J: 0, M: 0,
    A: 0, N: 0
  };

  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i]; 
    const choice = choices[i];

    if (choice === 4) continue;

    // 1~3 → 비동의 쪽 점수, 5~7 → 동의 쪽 점수
    const score = Math.abs(choice - 4);

    if (choice < 4) {
      scores[disagree] += score;
    } else {
      scores[agree] += score;
    }
  }

  let result = '';
  result += scores.R >= scores.T ? 'R' : 'T';
  result += scores.C >= scores.F ? 'C' : 'F';
  result += scores.J >= scores.M ? 'J' : 'M';
  result += scores.A >= scores.N ? 'A' : 'N';

  return result;
}

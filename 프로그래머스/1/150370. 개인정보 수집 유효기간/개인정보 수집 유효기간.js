function solution(today, terms, privacies) {
  let answer = [];

  // 날짜를 총 일수로 바꿔주는 함수
  const toDays = (dateStr) => {
    const [y, m, d] = dateStr.split('.').map(Number);
    return y * 12 * 28 + m * 28 + d;
  };

  const todayDays = toDays(today);

  // 약관 종류별 유효기간을 객체로 저장
  const termMap = {};
  terms.forEach((t) => {
    const [type, months] = t.split(' ');
    termMap[type] = Number(months);
  });

  // 개인정보별로 만료일 계산
  privacies.forEach((p, idx) => {
    const [date, type] = p.split(' ');
    const expireDate = toDays(date) + termMap[type] * 28;

    // 오늘 날짜가 만료일보다 크면 파기해야 함
    if (todayDays >= expireDate) {
      answer.push(idx + 1); 
    }
  });

  return answer;
}

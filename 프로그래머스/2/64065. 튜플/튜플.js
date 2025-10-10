function solution(s) {
  // 문자열에서 맨 앞 {{ 와 맨 뒤 }} 제거하고, "},{" 기준으로 분리
  const arr = s.slice(2, -2).split("},{");

  // 각 문자열을 ','로 나눠 숫자로 변환
  const sets = arr.map(el => el.split(",").map(Number));

  // 배열 길이 기준으로 오름차순 정렬
  sets.sort((a, b) => a.length - b.length);

  // 튜플 결과를 담을 배열
  const result = [];

  // 각 집합에서 result에 없는 숫자만 찾아 추가
  for (const set of sets) {
    for (const num of set) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
  }

  return result;
}

function solution(new_id) {
  // 1단계: 대문자 → 소문자
  new_id = new_id.toLowerCase();

  // 2단계: 허용 문자만 남기기
  new_id = new_id.replace(/[^a-z0-9-_.]/g, '');

  // 3단계: 마침표(.)가 2번 이상 연속되면 하나로
  new_id = new_id.replace(/\.{2,}/g, '.');

  // 4단계: 처음이나 끝의 마침표 제거
  new_id = new_id.replace(/^\.|\.$/g, '');

  // 5단계: 빈 문자열이면 "a" 대입
  if (new_id === '') new_id = 'a';

  // 6단계: 길이 16자 이상이면 15자만 남기고 끝이 .면 제거
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/, '');
  }

  // 7단계: 길이가 2 이하이면 마지막 문자를 반복해서 길이 3으로
  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  }

  return new_id;
}

function solution(s) {
  return s
    .split('')
    .sort((a, b) => {
      // 둘 다 같은 종류(둘 다 대문자거나 둘 다 소문자)면 문자 코드로 비교
      if ((a === a.toUpperCase() && b === b.toUpperCase()) ||
          (a === a.toLowerCase() && b === b.toLowerCase())) {
        return b.charCodeAt(0) - a.charCodeAt(0);
      }
      // 하나가 대문자고 다른 하나가 소문자라면 소문자를 더 크게 취급
      if (a === a.toLowerCase() && b === b.toUpperCase()) return -1;
      if (a === a.toUpperCase() && b === b.toLowerCase()) return 1;
    })
    .join('');
}

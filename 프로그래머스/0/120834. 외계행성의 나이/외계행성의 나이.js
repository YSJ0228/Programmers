function solution(age) {
    return age
    .toString()
    .split('')
    .map(num => String.fromCharCode(97 + Number(num))) //97은 'a'의 아스키 코드
    .join('');
}
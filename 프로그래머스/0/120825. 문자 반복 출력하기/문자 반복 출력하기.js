function solution(my_string, n) {
    return my_string
        .split('')
        .map(ch => ch.repeat(n))
        .join('');
}

function solution(letter) {
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };
    
    // 공백 기준으로 나누기
    const letters = letter.split(' ');
    
    // 각 모스부호를 알파벳으로 변환
    const decoded = letters.map(code => morse[code]);
    
    // 배열을 하나의 문자열로 합치기
    return decoded.join('');
}

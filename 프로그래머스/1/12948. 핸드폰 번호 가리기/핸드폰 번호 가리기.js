function solution(phone_number) {
    // 뒷 4자리 제외한 길이 계산
    let hiddenLength = phone_number.length - 4;
    let answer = '*'.repeat(hiddenLength) + phone_number.slice(-4);

    return answer;
}

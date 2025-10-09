function solution(friends, gifts) {
    // 각 사람 간 선물 주고받은 횟수를 저장할 객체
    const giftRecord = {};
    for (let f of friends) {
        giftRecord[f] = {};
        for (let ff of friends) {
            if (f !== ff) giftRecord[f][ff] = 0;
        }
    }

    // gifts 배열의 "A B" 데이터를 기록
    for (let g of gifts) {
        const [from, to] = g.split(" ");
        giftRecord[from][to] += 1;
    }

    // 각 사람의 '준 선물', '받은 선물', '선물 지수'
    const giftIndex = {};
    for (let f of friends) {
        let give = 0;
        let receive = 0;
        for (let ff of friends) {
            if (f === ff) continue;
            give += giftRecord[f][ff];
            receive += giftRecord[ff][f];
        }
        giftIndex[f] = give - receive;
    }

    // 다음 달에 받을 선물 개수 
    const nextGifts = {};
    for (let f of friends) nextGifts[f] = 0;

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const A = friends[i];
            const B = friends[j];
            const AtoB = giftRecord[A][B];
            const BtoA = giftRecord[B][A];

            // 규칙 1: 더 많이 준 사람이 선물 받음
            if (AtoB > BtoA) nextGifts[A]++;
            else if (AtoB < BtoA) nextGifts[B]++;
            else {
                // 규칙 2: 선물 지수 비교
                if (giftIndex[A] > giftIndex[B]) nextGifts[A]++;
                else if (giftIndex[A] < giftIndex[B]) nextGifts[B]++;
                // 규칙 3: 같으면 아무 일 없음
            }
        }
    }

    // 가장 많이 선물 받은 수를 반환
    return Math.max(...Object.values(nextGifts));
}

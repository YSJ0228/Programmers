function solution(str1, str2) {
    // 문자열을 두 글자씩 끊어 다중집합으로 변환
    const makeSet = (str) => {
        const arr = [];
        str = str.toLowerCase();
        for (let i = 0;i < str.length -1; i++){
            const pair = str.slice(i,i+2);
            if(/^[a-z]{2}$/.test(pair)) arr.push(pair);
        }
            return arr;
    };
        
        const set1 = makeSet(str1);
        const set2 = makeSet(str2);
        
        // 둘 다 공집합이면 유사도는 1
        if (set1.length === 0 && set2.length === 0 ) return 65536;
        // 교집합 계산
        const copySet2 = [...set2];
        const intersection = [];
        for (let s of set1){
            const idx = copySet2.indexOf(s);
            if (idx !== -1){
                intersection.push(s);
                copySet2.splice(idx, 1);
            }
        }
        
       
        
        // 자카드 유사도 계산
        const jaccard = intersection.length / (set1.length + set2.length - intersection.length);
        
    return Math.floor(jaccard * 65536);
}
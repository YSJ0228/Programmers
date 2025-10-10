function solution(cacheSize, cities) {
  let time = 0; // 총 실행 시간
  let cache = []; // 캐시를 배열로 표현 

  if (cacheSize === 0) return cities.length * 5; 
  // 캐시 크기가 0이면 모든 도시가 miss 

  for (let city of cities) {
    city = city.toLowerCase(); // 대소문자 구분 없게 변환

    let hitIndex = cache.indexOf(city);

    if (hitIndex !== -1) {
      // 캐시 히트 (이미 있음)
      cache.splice(hitIndex, 1); // 해당 도시를 제거하고
      cache.push(city); // 가장 최근에 사용된 것으로 다시 추가
      time += 1; // 실행시간 +1
    } else {
      // 캐시 미스 (없음)
      if (cache.length >= cacheSize) {
        cache.shift(); // 가장 오래된 도시 제거 (LRU)
      }
      cache.push(city); // 새 도시 추가
      time += 5; // 실행시간 +5
    }
  }

  return time; // 총 실행시간 반환
}

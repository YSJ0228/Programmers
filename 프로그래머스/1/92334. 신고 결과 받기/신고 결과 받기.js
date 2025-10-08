function solution(id_list, report, k) {
  //  중복 신고 제거
  const uniqueReports = [...new Set(report)];

  //  신고자 -> 신고당한 사람 리스트
  const reportMap = {};
  id_list.forEach(id => reportMap[id] = []);

  uniqueReports.forEach(r => {
    const [from, to] = r.split(" ");
    reportMap[from].push(to);
  });

  //  신고당한 횟수 
  const reportedCount = {};
  id_list.forEach(id => reportedCount[id] = 0);

  uniqueReports.forEach(r => {
    const [, to] = r.split(" ");
    reportedCount[to] += 1;
  });

  //  정지된 유저 목록 
  const banned = id_list.filter(id => reportedCount[id] >= k);

  //  각 유저가 받은 메일 수 
  const result = id_list.map(id => {
    let count = 0;
    reportMap[id].forEach(target => {
      if (banned.includes(target)) count += 1;
    });
    return count;
  });

  return result;
}

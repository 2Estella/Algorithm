// 오픈채팅방
// https://school.programmers.co.kr/learn/courses/30/lessons/42888

/**
 * 오픈채팅방
 * @param {string[]} record '[action] [id] [name]'
 * @returns 
 */
function solution(record) {
  const answer = [];
  const userInfo = {};
  
  for (let i = 0; i < record.length; ++i) {
    const [state, uid, name] = record[i].split(' ');
    
    if (state === 'Leave') {
      answer.push([uid, '님이 나갔습니다.']);
      continue;
    }
    
    if (state === 'Enter') {
      answer.push([uid, '님이 들어왔습니다.']);
    }

    userInfo[uid] = name;
  }

  return answer.map(item => userInfo[item[0]] + item[1]);
}


console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
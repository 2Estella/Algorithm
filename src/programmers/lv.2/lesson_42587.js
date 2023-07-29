// 프로세스
// https://school.programmers.co.kr/learn/courses/30/lessons/42587
/**
 * 프로세스
 * @param {number[]} priorities 프로세스의 중요도가 순서대로 담긴 배열
 * @param {*} location 프로세스의 위치
 * @returns 해당 프로세스가 실행되는 순서
 */
function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((item, index) => [item, index]);

  while (queue.length) {
    const [priority, index] = queue.shift();

    if (queue.some(([p, i]) => priority < p)) {
      queue.push([priority, index]);

    } else {
      answer++;
      
      if (index === location) {
        break;
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2))
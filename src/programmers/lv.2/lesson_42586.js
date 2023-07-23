// 기능 개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

/**
 * 기능 개발
 * @param {number[]} progresses 
 * @param {number[]} speeds 
 * @returns 각 배포마다 배포되는 기능의 개수
 */
function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let count = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      maxDay = days[i];
      answer.push(count);
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]))


// 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow((Math.sqrt(n) + 1), 2) : -1
}

console.log(solution(121))
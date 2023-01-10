// 자연수 뒤집어 배열로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return String(n).split('').reverse().map(item => Number(item))
}

console.log(solution(1009))
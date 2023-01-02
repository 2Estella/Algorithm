// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  if ((s.length === 4 || s.length === 6) && Number(s) === parseInt(s)) {
    return true
  } else {
    return false
  }
}

console.log(solution('1234'))
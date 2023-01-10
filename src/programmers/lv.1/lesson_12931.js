// 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

function solution(n) {
  let answer = 0
  let numArr = String(n).split('')

  for (i = 0; i < numArr.length; i++) {
    answer += Number(numArr[i])
  }

  return answer
}

console.log(solution(82))
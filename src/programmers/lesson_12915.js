// 문자열 내 마음대로 정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution(strings, n) {
  let answer = []

  for (i = 0; i < strings.length; i++) {
    answer.push(strings[i].charAt(n).concat(strings[i]))
  }

  answer.sort()

  for (i = 0; i < answer.length; i++) {
    answer[i] = answer[i].substring(1)
  }

  return answer
}

console.log(solution(["sun", "bed", "car"], 1))
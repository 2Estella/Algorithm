// 문자열 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  s = [...s]

  return s
          .sort()
          .reverse()
          .join('')
}

console.log(solution('kdRjfEslj'))
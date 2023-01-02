// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  s = s.toLowerCase()

  let countP = 0
  let countY = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p') {
      countP ++

    } else if (s[i] === 'y') {
      countY ++
    }
  }

  return (countP === countY) ? true : false
}

console.log(solution('ppYbdsfy'))
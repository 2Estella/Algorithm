// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let answer = ''
  let words = s.split(' ')
  
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        answer += words[i][j].toUpperCase()

      } else {
        answer += words[i][j].toLowerCase()
      }
    }
    if (i < words.length - 1) {
      answer += ' '
    }
  }
  return answer
}

console.log(solution('try hello world'))

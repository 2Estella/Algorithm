// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s){
  let stackCount = 0

  for (let i = 0; i < s.length; i++) {
    stackCount += (s[i] === '(') ? 1 : -1

    if (stackCount < 0) {
      return false
    }
  }

  return stackCount === 0 ? true : false
}


console.log(solution('()()'))
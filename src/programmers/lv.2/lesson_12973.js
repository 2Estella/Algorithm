// 짝지어 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

/**
 * 짝지어 제거하기
 * stack 이용
 * @param {*} s 알파벳 소문자로 이루어진 문자열
 * @returns 성공적으로 수행할 수 있으면 1, 아닐 경우 0
 */
function solution(s) {
  let stack = []

  for (const i of s) {
    if (stack.length === 0) { 
      stack.push(i) 

    } else if (stack[stack.length - 1] === i) {
      stack.pop()

    } else {
      stack.push(i)
    }
  }

  return stack.length ? 0 : 1
}

console.log(solution('baabaa'))
// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  s = s.split(' ').map(item => Number(item))

  let minNum = Math.min(...s)
  let maxNum = Math.max(...s)

  return `${minNum} ${maxNum}`
}

console.log(solution('1 2 3 4'))
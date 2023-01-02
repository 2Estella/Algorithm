// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  let watermelon = '수박'
  
  return watermelon.repeat(n).substring(0, n)

  // let answer = ''

  // for (i = 0; i < n; i++) {
  //   if (i % 2 === 0) {
  //     answer += '수'
  //   } else {
  //     answer += '박'
  //   }
  // }

  // return answer
}

console.log(solution(3))
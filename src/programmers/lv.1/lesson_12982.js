// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, buget) {
  let answer = 0
  let sum = 0

  d.sort((a, b) => a - b)

  for (let i = 0; i < d.length; i++) {
    answer++ 
    sum += d[i]
    
    if (sum > buget) {
      answer--
    }
  }

  return answer
}

console.log(solution([1,3,2,5,4], 9))
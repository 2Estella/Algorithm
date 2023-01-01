// 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  let arr = Array(n + 1).fill(true).fill(false, 0, 2)
  let count = 0

  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++
    }
  }
  
  return count
}

console.log(solution(5))
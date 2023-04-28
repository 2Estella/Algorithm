// 줄 서는 방법
// https://school.programmers.co.kr/learn/courses/30/lessons/12936

function solution(n, k) {
  let answer = []

  let arr = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    arr[i] = arr[i - 1] + 1
  }

  let nth = k - 1

  while(arr.length) {
    if (nth === 0) {
      answer.push(...arr)

      break
    }
    
    const factNum = factorial(arr.length - 1)
    const index = nth / factNum >> 0

    nth = nth % factNum

    answer.push(arr[index])
    arr.splice(index, 1)
  }
  
  return answer
}

const factorial = (n) => {
  return n ? n * factorial(n - 1) : 1
}

console.log(solution(3, 5))
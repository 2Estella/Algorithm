// 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function checkPrime(number) {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}
function solution(nums) {
  let answer = 0
  let max = nums.length

  for (let i = 0; i < max -2; i ++) {
    let number = 0

    for (let j = i + 1; j < max - 1; j++) {

      for (let k = j + 1; k < max; k++) {
        number = (nums[i] + nums[j] + nums[k])

        if (checkPrime(number)) {
          answer++
        }
      }
    }
  }

  return answer
}

console.log(solution([1,2,3,4]))
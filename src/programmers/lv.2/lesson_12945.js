
// 피보나치 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12945

/**
 * F(n) = F(n-1) + F(n-2)
 * F(0) = 0, F(1) = 1
 */

function solution(n) {
  const result = [0, 1]

  for (let i = 2; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1234567
  }

  return result.at(-1)

  // Recursive Solution: 재귀 함수로도 가능하지만 느림! 
  // const fibonacci = n => {
  //   if (n <= 1) {
  //     return n;
  //   }
  //   return fibonacci(n - 1) + fibonacci(n - 2);
  // };
}

console.log(solution(5))


// N개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953

/**
 * N개의 최소공배수
 * 유클리드 호제법(최소공배수 = x * y / 최대공약수)
 * @param {*} arr  길이 1이상, 15이하인 배열
 * @returns arr 안의 수들의 최소 공배수
 */
function solution(arr) {
  // 최대공약수 얻기
  const getGcd = (a, b) => {
    if (b === 0) {
      return a; 
    }
    return getGcd(b, a % b);
  }
  
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

console.log(solution([2,6,8,14]))
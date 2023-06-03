// 행렬의 곱셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12949

/**
 * 행렬의 곱셈
 * @param arr1 2차원 행렬
 * @param arr2 2차원 행렬
 * @returns [] arr1에 arr2를 곱한 결과
 */
function solution(arr1, arr2) {
  return arr1.map((arr1Row) => 
      arr2[0].map((_, arr2ColIdx) => 
      arr1Row.reduce((ac, arr1Val, arr1ColIdx) => ac + arr1Val * arr2[arr1ColIdx][arr2ColIdx], 0)))
}


console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]))
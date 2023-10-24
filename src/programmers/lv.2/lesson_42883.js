// 큰 수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/42883

/**
 * 큰 수 만들기
 * @param {string} number 
 * @param {number} k 
 * @returns 
 */
function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && arr[arr.length - 1] < el) {
      arr.pop();
      k--;
    }

    arr.push(el);
  }
  arr.splice(arr.length - k, k);
  return arr.join('');
}

console.log(solution('1231234', 3))
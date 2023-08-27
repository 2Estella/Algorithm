// 주식 가격
// https://school.programmers.co.kr/learn/courses/30/lessons/42584

/**
 * 주식 가격
 * @param {number[]} prices 초 단위로 기록된 주식가격이 담긴 배열
 * @returns 가격이 떨어지지 않은 기간은 몇 초인지 담은 배열 
 */
function solution(prices) {
  let answer = new Array(prices.length).fill(0)
    
  for(let i = 0; i < prices.length - 1; i++) {
    answer[i] = 1

    if (prices[i] <= prices[i + 1]) {
      for (let j = i + 1; j < prices.length - 1; j++) {
        if (prices[i] > prices[j]) {
          break;
        } else {
          answer[i] += 1;
        }    
      }
    }
  }

  return answer
}

console.log(solution([1, 2, 3, 3, 3]))
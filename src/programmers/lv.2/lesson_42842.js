// 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

/**
 * 카펫
 * @param {number} brown 갈색 격자의 수(8이상 5,000이하인 자연수)
 * @param {number} yellow 노란색 격자의 수(1이상 2,000,000이하인 자연수)
 * @returns 카펫의 가로, 세로 크기를 순서대로 담은 배열
 */
function solution(brown, yellow) {
  let answer = [];
  
  const carpetSize = brown + yellow
  // 카펫의 최소 너비, 높이: 3
  for (let i = 3; i < carpetSize; i++) {
    let width = carpetSize / i;
    let height = i;

    if ((width - 2) * (height - 2) === yellow) {
      answer = [width, height]
      break;
    }
  }

  return answer;
}

console.log(solution(10, 2))
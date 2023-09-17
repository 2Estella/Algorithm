// H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747

/**
 * H-Index
 * @param {number[]} citations 과학자가 발표한 논문의 인용 횟수를 담은 배열
 * @returns 해당 과학자의 H-Index
 */
function solution(citations) {
  citations.sort((a, b) => b - a);
  
  let i = 0;

  while (i + 1 <= citations[i]) {
      i++;
  }

  return i;
};

console.log(solution([3, 0, 6, 1, 5]));
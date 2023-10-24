// 구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885

/**
 * 구명보트
 * @param {number[]} people 사람들의 몸무게를 담은 배열
 * @param {number} limit 구명보트의 무게 제한
 * @returns 구명보트가 이동한 횟수
 */
function solution(people, limit) {
  people.sort((a, b) => a - b)

  let count = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }

    right--;
    count++;
  }

  return count;
}

console.log(solution([70, 50, 80, 50], 100))
// 가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

/**
 * 가장 큰 수
 * @param {number[]} numbers 0 또는 양의 정수가 담긴 배열
 * @returns 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열 변경한 값
 */
function solution(numbers) {
  let answer = numbers.map(number => String(number))
        .sort((a, b) => (b + a) - (a + b))
        .join('');

  return answer[0] === '0' ? '0' : answer;
}


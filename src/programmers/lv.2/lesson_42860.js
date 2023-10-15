// 조이스틱
// https://school.programmers.co.kr/learn/courses/30/lessons/42860

/**
 * 조이스틱
 * @param {string} name 
 * @returns 
 */
function solution(name) {
  let answer = 0;
  let cursorMove = name.length;

  const midLine = (cursorMove + 1) / 2;
  const [moveLeft, moveRight, onlyLeft, onlyRight] = name.split('').reduce((prev, cur, index) => {
    if (cur !== 'A') {
      if (index < midLine) {
        prev[0] = prev[0] > index ? prev[0] : index;
      } else {
        prev[1] = prev[1] > (cursorMove - index) ? prev[1] : cursorMove - index;
      }

      if (prev[2] < index) {
        prev[2] = index;
      }

      if (index !== 0 && prev[3] === 0) {
        prev[3] = cursorMove - index;
      }
    }

    return prev;
  }, [0, 0, 0, 0])

  answer += Math.min(onlyLeft, onlyRight, moveLeft * 2 + moveRight, moveLeft + moveRight * 2);
  
  for (let i = 0; i < cursorMove; i++) {
    if (name[i] < 'N') {
      answer += name[i].charCodeAt() - 'A'.charCodeAt();
    } else {
      answer += 'Z'.charCodeAt() - name[i].charCodeAt() + 1;
    }
  }

  return answer;
}

console.log(solution('JEROEN'))
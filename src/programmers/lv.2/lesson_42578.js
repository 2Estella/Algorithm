// 의상
// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const clothesMap = new Map();
  let answer = 1;

  for (let [name, type] of clothes) {
    if (clothesMap.has(type)) {
      clothesMap.set(type, clothesMap.get(type) + 1);
    } 
    else {
      clothesMap.set(type, 1);
    }
  }

  for (let v of clothesMap.values()) { 
    answer *= (v + 1); 
  }
  return answer - 1;
}
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
// 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583

/**
 * 다리를 지나는 트럭
 * 큐
 * @param {*} bridge_length 다리에 올라갈 수 있는 트럭 수
 * @param {*} weight 다리가 견딜 수 있는 무게
 * @param {*} truck_weights 트럭 별 무게가 담긴 배열
 * @returns 모든 트럭이 다리를 건너는 데 걸리는 최소 시간(초)
 */
function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let currentWeight = 0;
  let answer = 0;

  while (truck_weights.length) {
    answer++;
    currentWeight -= bridge.shift();

    if (currentWeight + truck_weights[0] > weight) {
      bridge.push(0);
    
    } else {
      const currentTruck = truck_weights.shift();
      bridge.push(currentTruck);
      currentWeight += currentTruck;
    }
  }
  return answer + bridge_length;
}

console.log(solution(2, 10, [7,4,5,6]))
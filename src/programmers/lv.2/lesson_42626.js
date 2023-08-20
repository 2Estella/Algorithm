// 더 맵게 
// https://school.programmers.co.kr/learn/courses/30/lessons/42626

/**
 * 최소 힙 class
 * - size() 길이
 * - push() 삽입(오름차순 정렬)
 * - pop() 삭제(오름차순 정렬)
 * - peak() 첫번째 값 리턴
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) { 
      return this.heap.pop();
    }
    
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      let minChildIndex = currentIndex * 2 + 2 < this.heap.length && 
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] 
        ? currentIndex * 2 + 2 : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

/**
 * 더 맵게
 * [Heap 구조 사용]
 * @param {number[]} scoville 모든 음식의 스코빌 지수
 * @param {number} K 원하는 스코빌 지수
 * @returns 
 */
function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const item of scoville) {
    minHeap.push(item);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();

    const mixedScov = first + second * 2;

    minHeap.push(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}


console.log(solution([1, 2, 3, 9, 10, 12],	7));
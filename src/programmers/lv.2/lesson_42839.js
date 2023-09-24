// 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/42839
/**
 * 소수 찾기
 * @param {string} numbers 1 이상 7 이하인 0~9까지 숫자만으로 이루어진 문자열
 * @returns 
 */
function solution(numbers) {
  const answer = [];
  let nums = numbers.split(''); 
  
  const isPrimeNumber = (number) => {
    if(number <= 1) {
      return false;
    } 
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) { 
        return false;
      }
    }
    return true;
  }
  
  const getPermutation = (arr, fixed) => {
    if(arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];

        copyArr.splice(i, 1);
        if (!answer.includes(+newNum) && isPrimeNumber(+newNum)) {
          answer.push(+newNum);
        }
        getPermutation(copyArr, newNum); 
      }
    }
  }
  
  getPermutation(nums, '');

  return answer.length;
}

console.log(solution('17'))
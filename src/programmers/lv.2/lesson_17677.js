// [1차] 뉴스 클러스터링
// https://school.programmers.co.kr/learn/courses/30/lessons/17677
/**
 * 뉴스 클러스터링
 * @param {*} str1 2 이상, 1,000 이하 문자열
 * @param {*} str2 2 이상, 1,000 이하 문자열
 * @returns 
 */
function solution(str1, str2) {
  const getSet = (str) => {
    const arr = [];

    for (let i = 0; i < str.length - 1; i++) {
        const temp = str[i] + str[i + 1];

        if (/^[a-z]{2}$/i.test(temp)) {
          arr.push(temp.toLowerCase())
        }
    }
    return arr;
  }

  const arr1 = getSet(str1)
  const arr2 = getSet(str2)

  const set = new Set([...arr1, ...arr2]);
  
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })

  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
  

console.log(solution('FRANCE', 'french'))
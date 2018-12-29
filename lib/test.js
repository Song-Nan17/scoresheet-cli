let info = '张三，101，数学：95，语文：az，英语：93，编程：94';
let infoArr = info.split('，');
let courcesArr = infoArr.slice(2).map(ele => ele.split('：'));
//   if (infoArr.length < 2 && !parseInt(infoArr[1])) {
//     console.log(false);
//   }
console.log(courcesArr)
let cources= courcesArr.map(arr => {
  if (arr.length !== 2 || !parseInt(arr[1])) {
console.log('false')
  }
console.log('true')
});
// console.log(cources);
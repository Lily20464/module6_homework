// задание 3
// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.


// несколько решений, надеюсь верные имеются

const generateSumFinder = () => {
  const sum = (a, b) => a + b;
  return sum;
const sum = generateSumFinder();
sum(1, 5);



function sumNums(a) {
    return function (b) {
       return a + b;
    }
 }
 console.log(sumNums(5)(1));


 const sum = (a) => (b) => a + b;
 console.log(numSum(5)(8));

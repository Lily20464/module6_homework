// // задание 1
// // В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// // Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// // При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.
// // На этот раз оформите решение в виде функции, постарайтесь
// дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
//


// function funcOfnums() {
// const nums = [1, NaN, 4, 'test', 8, null , 15, 18];
// let oddNums = 0;
// let evenNums = 0;
//
// for ( i = 0; i < nums.length; i++ ) {
//   if (typeof(nums[i]) == "number" && isNaN(nums[i]) !== true) {
//      if (nums[i]%2 == 0) evenNums++
//      else oddNums++
//    }
// }
// console.log('Чётных чисел: ' + evenNums);
// console.log('Нечётных чисел: '+ oddNums);
// }



// задание 2
// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

// function primeNums(x) {
//     let symple = 'Простое', notSymple = 'Не простое', wrong = 'Данные не верны';
//     if (x <= 1 || x > 1000 ) {
//        return wrong;
//     };
//     for (let i = 2; i <= x / 2; i++) {
//        if (x % i === 0) {
//           return notSymple;
//        }
//     }
//     return symple;
//  }
// primeNums(10);

// задание 3
// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.


// const generateSumFinder = () => {
//   const sum = (a, b) => a + b;
//   return sum;
// const sum = generateSumFinder();
// sum(1, 5);

// function sumNums(a) {
//     return function (b) {
//        return a + b;
//     }
//  }
//  console.log(sumNums(5)(1));


// задание 4
//
// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
// Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15.
// Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15
// (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
//

// function printNumbers(from, to) {
//   let current = from;
//
//   let timerId = setInterval(function() {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(5, 15);


// задание 5
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
//
// Используйте Arrow Function синтаксис.
//
// Протестируйте функцию на любых значениях и выведите результат в консоль.
//
// Удачи!

//
// let pow = (x, n) => x ** n;
//
// console.log(res(3,2));
// console.log(res(4,3));

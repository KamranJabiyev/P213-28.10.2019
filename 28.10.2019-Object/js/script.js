// func(5, 6);

// function func(m, n) {
//     return m + n;

// }


// console.log(func(5, 6))

// let func = (m, n) => {
//     m = m + n;
//     n = m - n;
//     m = m - n;
//     return "m-" + m + " n-" + n;
// }

// func = 5
// console.log(func(7, 8))


// let arr = [10, 12, 15];
// let arr1 = arr;
// arr1[0] = 20;

// let a = 5;
// let b = a;
// b = 6

// console.log(a);
// console.log(b);

// function Sum(arr, func) {
//     let result = 0;
//     for (n of arr) {
//         if (func(n))
//             result += n;
//     }
//     return result;
// }

// var arr = [15, 95, 80, 63, 77];


// Sum(arr, n => n > 50);

// const selectSameElm = (arr1, arr2) => {
//     let result = [];
//     for (elem of arr1) {
//         if (arr2.find(n => n === elem) !== undefined) {
//             result.push(elem);
//         }
//     }
//     return result;
// }

// let arr1 = [1, 25, 3, 5];
// let arr2 = [15, 45, 35, 55];

// console.log(selectSameElm(arr1, arr2))
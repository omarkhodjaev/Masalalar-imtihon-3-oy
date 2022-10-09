//1 masala
// function convert(bool){
//     if(bool == true){
//         return console.log("Yes")
//     }
//     else{
//         return console.log("No")
//     }
// }
// convert(false)









//2 masala
// function sumOfNegativer(array){
//     let sum = 0;
//     for(let i = 0; i <array.length; i++){
//         if(array[i] < 0){
//             sum += array[i];
//         }
//     }
//     return console.log(sum);
// }
// sumOfNegativer([4,-5,-10,6])








// 3 masala
// function sumOfTheArray(a, b) {
//     let c = [];
//     for (let i = 0; i < Math. max(a. length, b. length); i++) {
//     c. push((a[i] || 0) + (b[i] || 0));
//     }
//     let sum = c.reduce((partialSum, a) => partialSum + a, 0);
//     return console.log(sum);
//     }
//     sumOfTheArray([4,-5,-10,6], [6,9,14,-1,6]);











// 4 masala
// let fillThisArray = [];
// function generateAndSum(num){
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         fillThisArray.push(i)
//         sum += i;
//     }
//     return console.log(fillThisArray + " => " + sum)
// }
// generateAndSum(5)







// 5 masala
// function removeStringSpaces(str){
//     return console.log(str.split(' ').join(''))
// }

// removeStringSpaces("Hel lo, How a re you !")









// 6 masala
// function removeStringSpaces(arr){
//     let soni = 0;
//     let sum1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0){
//             soni++
//         }
//         else{
//             sum1 += arr[i]
//         }
//     }

//     let aaa = []
//     aaa.push(soni)
//     aaa.push(sum1)
//     console.log(aaa);
// }
// removeStringSpaces([4,2,10,19,16,345,-4,1,-6,-8,2,-2])






// 7 masala

// function removeStringSpaces(arr) {
//     const foundArr = arr.find((element) => typeof element === "boolean");
//     console.log(foundArr);
//   }
//   removeStringSpaces(["hello", 45, -3, null, true, undefined, false, { age: 40 }]);



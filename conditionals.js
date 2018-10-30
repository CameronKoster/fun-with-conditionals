//1. Write a function that takes 2 parameters and displays the larger// function dispNum(num1, num2) {
//   if (num1 > num2) {
//     return (num1)
//   }
//   else if (num1 < num2) {
//     return (num2)
//   } else {
//     return ("equal")
//   }
// }
// console.log(dispNum(8, 8))


// //2. Write a function that will take in a number (1-100) return the letter grade for the student score
// function grade(num) {
//   if (num > 90) {
//     return ("A")
//   }
//   else if (num > 80 || num < 89) {
//     return ("B")
//   }
//   else if (num > 70 || num < 79) {
//     return ("C")
//   }
//   else if (num > 60 || num < 69) {
//     return ("D")
//   }
//   else { }
// }
// console.log(grade(83))


//3. Write a function that will take in a number and return 'fever' if it indicates a fever 
// (over 98.6) and additionally if the person should go to the hospital(over 103) 'fever go to hospital'
// (hint: try this with string concatenation), if it is under return 'no fever'
// function temp(num) {
//   if (num >= 103) {
//     return ("fever go to hospital")
//   }
//   else if (num >= 98.6 || num < 102.99) {
//     return ("fever")
//   }
//   else if (num < 98.6) {
//     return ("no fever")
//   }
// }
// console.log(temp(101))


//4. Write a function that takes in a car object, if it is not moving then return true
// let myCar = {
//   moving: false
// }
// function isStopped(car) {
//   if (car.moving) {
//     return false
//   }
//   return true
// }
// console.log(isStopped(myCar))


//5. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false
let myDish = {
  dirty: true,
  mine: true
}
function washDish(dish) {
  return dish.dirty && dish.mine
}
console.log(washDish(myDish))




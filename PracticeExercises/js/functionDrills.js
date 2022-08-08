// FUNCTION DRILLS

function isOdd(number){
   return number % 2 === 1;
}
console.log(isOdd(2));
console.log(isOdd(5));

function isEven(number){
   return number % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(2));

function identity(input){
   return input
}
console.log(identity('Jack'));

function isFive(input){
   return input === 5;
}
console.log(isFive(4));
console.log(isFive(5));

function addFive(input){
   return input + 5;
}
console.log(addFive(4));
console.log(addFive(Infinity));

function isMultipleOfFive(input){
   return input % 5 === 0;
}
console.log(isMultipleOfFive(10));
console.log(isMultipleOfFive(143));

function isThree(input){
   return input === 3;
}
console.log(isThree(3));
console.log(isThree(7));

function isMultipleOfThree(input){
   return input % 3 === 0;
}
console.log(isMultipleOfThree(99));
console.log(isMultipleOfThree(41));

function isMultipleOfThreeAndFive(input){
   return input % 3 === 0 && input % 5 === 0;
}
console.log(isMultipleOfThreeAndFive(45));
console.log(isMultipleOfThreeAndFive(711));

function isMultipleOf(target, n){
   return target % n === 0;
}
console.log(isMultipleOf(10, 5));
console.log(isMultipleOf(11, 7));

function isTrue(boolean){
   return boolean === true;
}
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue("yes"));

function isFalse(boolean){
   return boolean !== true;
}
console.log(isFalse(true));
console.log(isFalse(false));
console.log(isFalse("yes"));

// SIMPLE FUNCTION DRILLS
//
// function returnTwo(){
//    return 2;
// }
// console.log(returnTwo());
//
// function sayHowdy(){
//    console.log("Howdy!");
// }
// sayHowdy();
//
// function returnName(){
//   return "Cody Palmer"
// }
// console.log(returnName());
//
// function addThree(input){
//    return input + 3
// }
// console.log(addThree(5));
//
// function sayString(input){
// return input
// }
// console.log(sayString('codeup'))

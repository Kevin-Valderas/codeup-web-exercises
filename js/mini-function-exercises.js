// ================ !! Mini-exercises !!
// Write a function, returnFive, that returns the number five. No inputs should be defined.
function returnFive() {
    return 5;
}
console.log(returnFive());
// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
function isFive(x) {
    return (x === "5" || x === 5);
}
console.log(isFive());

// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
function ranString() {
    let len = ~~(Math.random() * 10) + 1;
    let out = "";
    let options = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < len; i++) {
        let ranIdx = ~~(Math.random() * options.length);
        let char = options[ranIdx];
        let ranCase = Math.random();
        if(ranCase > .5) {
            out += char.toUpperCase();
        } else {
            out += char;
        }
    }
    return out;
}
function isShortWord(str) {
    console.log(str)
    return (str.length <= 5)
}
console.log(isShortWord(ranString()));


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.


// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

// Refactor the following code to use functions...
// var x = 2;
// var y = 4;
// var totalXY = x + y;
// console.log('The result of num1 + num2 is: ' + totalXY);
//

// var a = 5;
// var b = 1;
// var totalAB = a + b;
// console.log('The result of num1 + num2 is: ' + totalAB);
//

// var c = 10;
// var d = 5;
// var totalCD = c + d;
// console.log('The result of num1 + num2 is: ' + totalCD);

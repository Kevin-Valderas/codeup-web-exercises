/**function showMultiplicationTable() {
    var x = prompt("What is the multiplicand?")
    for (var i = 1; i <=10; i++) {
        console.log(x + "*" + i + "=" + x * i)
    }
}
showMultiplicationTable();**/

/**function isOddEven() {
    for (var i = 1; i <= 10; i++) {
        var randNum;
        randNum = Math.floor(Math.random() * 180) + 20;
        if (randNum % 2 !== 0) {
            console.log(randNum + " is " + " odd.");
        }
        if (randNum % 2 === 0) {
            console.log(randNum + " is " + " even.");
        }
        console.log(i)
    }
}
isOddEven();**/

function makePyramid(x) {
    for (var i = 1; i <= x; i++) {
        var makeString = "";
        for (var j = 0; j < i; j++) {
            makeString += i.toString();
        }
        console.log(makeString);
    }
} makePyramid(9);



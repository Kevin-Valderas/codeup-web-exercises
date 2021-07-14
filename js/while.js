/**var number = 1;
while (number < 65536) {
    number *= 2;
    console.log(number);
}

while (number >= 1) {
    number *= 2;
    console.log(number);
    if (number === 65536) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
    }
}**/

var allCones = Math.floor(Math.random() * 50) +50;
var conesSold;

do {
    conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold <= allCones) {
        console.log(conesSold + " cones sold");
        allCones -= conesSold;
        console.log("I have " + allCones + " left")
    } else {
        console.log("I cannot sell you " + conesSold + ", I only have " + allCones + " left!");
    }
}
while (allCones > 0);

    console.log("Darn, all gone. /s");
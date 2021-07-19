(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
function addSun(){
    console.log('Adding "The Sun" to the beginning of the planets array.');
    return planets.unshift('The Sun');
    }
    addSun();
    console.log(planets);
function addPluto(){
    console.log('Adding "Pluto" to the end of the planets array.');
    return planets.push('Pluto');
}
addPluto();
    console.log(planets);
function clearSun() {
    console.log('Removing "The Sun" from the beginning of the planets array.');
    return planets.shift();
}
clearSun();
    console.log(planets);
function clearPluto() {
    console.log('Removing "Pluto" from the end of the planets array.');
    return planets.pop();
}
 clearPluto();
    console.log(planets);
function index(input) {
    console.log('Finding and logging the index of "Earth" in the planets array.');
    return planets.indexOf(input);
}
console.log(index('Earth'));

    function reverse() {
        console.log("Reversing the order of the planets array.");
        return planets.reverse();
    }

    console.log(reverse());

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();

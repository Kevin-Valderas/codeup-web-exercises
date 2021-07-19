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
console.log(planets);

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
    console.log(addSun());
function addPluto(){
    console.log('Adding "Pluto" to the end of the planets array.');
    return planets.push('Pluto');
}

    console.log(addPluto());
function clearSun() {
    console.log('Removing "The Sun" from the beginning of the planets array.');
    return planets.shift();
}
clearSun();
    console.log(clearSun());
function clearPluto() {
    console.log('Removing "Pluto" from the end of the planets array.');
    return planets.pop();
}
    console.log(clearPluto());
function index(input) {
    console.log('Finding and logging the index of "Earth" in the planets array.');
    return planets.indexOf(input);
}
console.log(index('Earth'));

    console.log("Reversing the order of the planets array.");
    function reverse(){
    return planets.reverse()
    }

    console.log(reverse());

    console.log("Sorting the planets array.");
    function sort() {
        return planets.sort();
    }
    console.log(sort());
})();A

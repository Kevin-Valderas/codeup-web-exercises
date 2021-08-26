const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 2
let threeLangs = users.filter(function (currentElement){
    return currentElement.languages.length > 2;
});

// 3
let emails =  users.map( user => user.email);

// 4

let averageYearsOfExperience = users.reduce((total, user, index, array) => total + user.yearsOfExperience/array.length, 0);

// 5
let longestEmail = users.reduce((accumulator, currentUser, index, array) => {
    if(accumulator.email.length > currentUser.email.length){
        return accumulator;
    } else {
        return currentUser;
    }
}).email;

// 6

let names = users.reduce((accumulator, user, index, usersArray) => {
    if (index === usersArray.length - 1){
        accumulator.push(user.name);
        let niceJoin = accumulator.join(', ');
        niceJoin = `Your instructors are : ${niceJoin}`;
        return niceJoin;
    } else {
        accumulator.push(user.name);
        return accumulator;
    }
});
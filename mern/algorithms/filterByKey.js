const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
    { firstName: "John", lastName: "Fawn" },
    { firstName: "Edward", lastName: "Kim" }
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "John", lastName: "Fawn" },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
];


// Filters the given items based on the search criteria using a startsWith
// first loop: through the person array with for loop
// use the searchBy to select filterByKey
// grab the value from that key
// 

function filterByKeyStartsWith(items, searchFor, searchBy, searchMethod) {
    const expected = []
    for (const obj of items) {
        if (obj[searchBy].startsWith(searchFor) === true) {
            expected.push(obj)
        }
        else if (obj[searchBy].includes(searchFor.toLowerCase()) === true && searchMethod === "includes") {
            expected.push(obj)
        }
    }
    return expected
}
console.log(filterByKeyStartsWith(people, searchFor1, searchBy1))
console.log(filterByKeyStartsWith(people, searchFor2, searchBy2))
console.log(filterByKeyStartsWith(people, searchFor3, searchBy3))
console.log(filterByKeyStartsWith(people, searchFor4, searchBy4, searchMethod4))


function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    // Filters the given items based on the search criteria using different search method
    // search method : includes, startsWith, endsWith



}


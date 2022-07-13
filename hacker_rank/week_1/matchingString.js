


// function matchingStrings(strings, queries) {
//     let counter = 0;
//     let output = [];

//     for (let i = 0; i < queries.length; i++) {
//         for (let j = 0; j < strings.length; j++) {
//             console.log(queries[i], strings[i]);
//             if (queries[i] == strings[j]) {
//                 counter = counter + 1;
//             }
//         }
//         output.push(counter);
//         counter = 0;
//     }

//     return output;
// }

function matchingStrings(strings, queries) {
    let map = {};
    let output = [];

    for (let i = 0; i < strings.length; i++) {
        if (map[strings[i]]) {
            map[strings[i]] += 1;
        } else {
            map[strings[i]] = 1;
        }
    }
    for (let q of queries) {
        map.hasOwnProperty(q) ? output.push(map[q]) : output.push(0)
    }
    return output;
}


console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));
console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmh', 'fgh']));



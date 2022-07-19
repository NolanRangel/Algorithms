


function pangrams(s) {
    let map = {};
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        map[String.fromCharCode(i)] = 0;
    }
    for (let j = 0; j < s.length; j++) {
        let char = s[j].toLowerCase()
        if (map.hasOwnProperty(char)) {
            map[char] += 1
        }
    }
    console.log(map);
    for (const value of Object.values(map)) {
        if (value === 0) {
            return 'not pangram'
        }
    }

    return 'pangram'
}


// console.log(pangrams('The quick brown fox jumps over the lazy dog'));
console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));
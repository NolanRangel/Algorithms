//------------ Grouping Categories ---------
const objects = [
    {
        name: "Receving red packets",
        category: "fun",
    },
    {
        name: "Turnip Cake",
        category: "yummy",
    },
    {
        name: "Having never-ending feasts",
        category: "fun",
    },
    {
        name: "Everyone asks you for money",
        category: "Not fun",
    },
    {
        name: "Rice Cake",
        category: "yummy",
    },
    {
        name: "Ate too much unhealthy food",
        category: "not fun",
    },
];


const expected = {
    fun: [
        {
            name: "Receving red packets",
            category: "fun",
        },
        {
            name: "Having never-ending feasts",
            category: "fun",
        },
    ],
    yummy: [
        {
            name: "Rice Cake",
            category: "yummy",
        },
        {
            name: "Turnip Cake",
            category: "yummy",
        },
    ],
    "Not fun": [
        {
            name: "Ate too much unhealthy food",
            category: "Not fun",
        },
        {
            name: "Everyone asks you for money",
            category: "Not fun",
        },
    ],
};


/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/
function groupObjects(items) {
    let hashTable = {}

    for (i in items) {

        for ([key, value] of Object.entries(items[i])) {

            if (key === 'category') {

                if (hashTable.hasOwnProperty(value.toLowerCase()) === false) {
                    // first occurrence found
                    hashTable[value.toLowerCase()] = []


                }
                hashTable[value.toLowerCase()].push(items[i])
            }
        }
        // console.log("i: "+i)
        // console.log("value: "+value)
    }

    return hashTable

}
console.log(groupObjects(objects))



//------------ backspace string compare---------



const S1 = "ab#c"; // ac
const T1 = "ad#c"; //ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##"; //""
const T2 = "c#d#"; //""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c"; //"c"
const T3 = "#a#c"; //"c"
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c"; //c
const T4 = "b"; //b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/
function backspaceStringCompare(S, T) {
    let sArr = []
    let tArr = []
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "#") {
            sArr.pop()
        } else {
            sArr.push(S[i]);
        }
        if (T[i] === "#") {
            tArr.pop()
        } else {
            tArr.push(T[i]);
        }

    }
    return sArr.join() == tArr.join()
    // let j = 0;
    // while(j<sArr.length){
    //   if(sArr[j] === tArr[j]){
    //     j++
    //   }
    //   else{
    //     return false
    //   }
    // }
    // return true
}
console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))
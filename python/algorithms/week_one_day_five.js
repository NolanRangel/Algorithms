// 
/* 
Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value 
*/



const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
  abc: 42,
  3: "wassup",
  yo: true,
};

const keys2 = ["abc", 3, "yo", "bro"];
const vals2 = [42, "wassup", true];
const expected2 = {
  abc: 42,
  3: "wassup",
  yo: true,
  "bro": ""
};

const keys3 = ["abc", 3, "yo"];
const vals3 = [42, "wassup", true, "tom"];
const expected3 = {
  abc: 42,
  3: "wassup",
  yo: true,
  "none": "tom"
};

// const keys3 = ["abc", 3, "yo", 'yo'];
// const vals3 = [42, "wassup", true, 'tom'];
// const expected3 = {
//   abc: 42,
//   3: "wassup",
//   yo: true,
//   yo2: 'tom'
// };

// create funtion to travel through arrays
//  create dictionary variable
// create loop to travel through keys and values and push them in to key position within dictionary
// EDGE CASES
// if key does not pair with value
// if value does not pair with a key
// if there are two matching keys
// return dictionary variable


function zipArraysIntoMap(keys, values) {
  var dict= {};
    for (var i = 0; i < keys.length; i++){
        let key = keys[i]
        let value = values[i]
        if(key == undefined){
            key = "none"
        }
        if(value == undefined){
            value = "none"
        }
        else{
            dict[keys[i]] = values[i];
        }
    }
    return dict
}
console.log(zipArraysIntoMap(keys1, vals1))
console.log(zipArraysIntoMap(keys2, vals2))
console.log(zipArraysIntoMap(keys3, vals3))



// *************************************************


/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

const obj2 = { name: "Zaphod", charm: "high", morals: ['thing 1', 'thing 2'] };
const expected2 = { Zaphod: "name", high: "charm", 'thing 1': morals, 'thing 2': morals };

// 
const obj3 = { name: "Zaphod", charm: "", morals: "" };
const expected3 = { Zaphod: "name", "none": "charm", "none2": morals };


function invertObj(obj) {}
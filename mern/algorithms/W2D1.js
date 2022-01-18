
// hash map/ frequenct table

function frequencyTableBuilder(arr) {
    const freqTable = {};

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];

        if (freqTable.hasOwnProperty(str) === false) {
            // first occurrence found
            freqTable[str] = 1;
        } else {
            freqTable[str]++;
        }
    }
    return freqTable;
}

  
  
  


  
// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7]; 
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */

function orderedIntersection(sortedA, sortedB) {
  let i=0;
  let j=0;
  let newArr=[]
  while (i<sortedA.length && j<sortedB.length){
    if (sortedA[i]===sortedB[j] && sortedA[i]!==newArr[newArr.length-1]){
      newArr.push(sortedA[i])
      i++
      j++
    }
    if (sortedA[i]<=sortedB[j]) {
      i++
    }
    else if (sortedA[i]>=sortedB[j]){
      j++
    }
  }
  
  return newArr
}


// function orderedIntersection(numsA1, numsB1) {
//     newArr = [];
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) != -1 && newArr.indexOf(arr2[i]) == -1) {
//             newArr.push(arr2[i]);
//         }
//     }
//     console.log(newArr);
//      return newArr
// }


console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))

  // Remember to run the program in Shell, not console
  //given 2 sorted array in different length, find the nums that are intersect and return the array 
  //****  nums that appeared in both array.





function orderedMultisetUnion(sortedA, sortedB) {
  let i=0;
  let j=0;
  let newArr=[]
  while (i<sortedA.length && j<sortedB.length){
    if (sortedA[i]===sortedB[j]){
      newArr.push(sortedA[i])
      i++
      j++
    }else if(sortedA[i]<sortedB[j]){
      newArr.push(sortedA[i])
      i++
    }else{
      newArr.push(sortedB[j])
      j++     
    }
  }
  while(i<sortedA.length){
    newArr.push(sortedA[i])
    i++    
  }
  while(j<sortedB.length){
    newArr.push(sortedB[j])
    j++    
  }

  return newArr


  //given 2 sorted array in different length, find the union of both set and return the array 
  //**** all nums that appeared in either array.

}



console.log(orderedMultisetUnion(numsA5, numsB5))
console.log(orderedMultisetUnion(numsA4, numsB4))



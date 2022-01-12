/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [-2, 5, 0, 7, 0, 3];
const expected3 = 3;

const nums4 = [-2, 5, 7, 5, 3];
const expected4 = -1;


function balanceIndex(nums) {}

// *********************************************************************


/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visited indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
const expected2 = true;

// PSUEDO CODE 
// WHEN WE FIND 1 START COUNTING 
// ONCE WE FIND 1 AGAIN       
//  IF COUNT===6
// REPEAT UNTIL THE NEXT 1
//  IF COUNT < 6
// RETURN FALSE

function socialDistancingEnforcer(queue) {
    var count = 6;

    for(var i = 0; i < queue.length; i++){
            // console.log(queue[i]);
            if(queue[i] == 0){
                count++
            }
            else{
                if(count >= 6){
                    value = true;
                    count = 0;
                }
                else{
                    return false
                }
            }
        }
    return value
}

console.log(socialDistancingEnforcer(queue1))
console.log(socialDistancingEnforcer(queue2))
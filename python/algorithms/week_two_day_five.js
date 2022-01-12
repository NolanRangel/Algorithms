/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
  ];
  const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  
  const newInv2 = [];
  const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
  const expected2 = [{ name: "Peanut Butter", quantity: 20 }];
  
  const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
  const currInv3 = [];
  const expected3 = [{ name: "Peanut Butter", quantity: 20 }];
  

// PSUEDO CODE
// CREATE LOOP TO TRAVEL THROUGH currInv
// IF 


  function updateInventory(newInv, currInv) {
        let notFound = []
        for (newObj of newInv){
          console.log(newObj)
          let wasfound = false
          for (currObj of currInv){
            // console.log(currObj['name'])
            if (newObj['name'] === currObj['name']){
              // let value =
              currObj['quantity'] += newObj['quantity']
              wasfound = true
              break  
            }
          }
          if (wasfound === false){
            currInv.push(newObj) 
          }
        }
        // for(obj of notFound){
        //   currInv.push(obj)
        // }
        return currInv
      
    }
  
updateInventory(newInv1, currInv1)
updateInventory(newInv2, currInv2)
updateInventory(newInv3, currInv3)
  //****************************************************************************************************************************************
  
  /* 
    Given a string that may have extra spaces at the start and the end,
    return a new string that has the extra spaces at the start and the end trimmed (removed)
    do not remove any other spaces.
  */
  
  const str1 = "   hello world     ";
  const expected4 = "hello world";
  

  function trim(str) {
  
    //Your code here
  }
  
  // ***************************************************************************************************************************************** 
  /* 
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
    Is there a quick way to determine if they aren't an anagram before spending more time?
    Given two strings
    return whether or not they are anagrams
  */
  
  const strA1 = "yes";
  const strB1 = "eys";
  const expected5 = true;
  
  const strA2 = "yes";
  const strB2 = "eYs";
  const expected6 = true;
  
  const strA3 = "no";
  const strB3 = "noo";
  const expected7 = false;
  
  const strA4 = "silent";
  const strB4 = "listen";
  const expected8 = true;
  

  function isAnagram(s1, s2) {
  
    //Your code here
  }
/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  
  const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
  
  // This object contains inherited key value pairs from the above proto obj.
  // hint: hasOwnProperty
  const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  });
  
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];
  
  function entries(obj) {
    let arr = [];
    for ( i in obj){
      // console.log(`${i}: ${obj[i]}`);
      // console.log(`${i}`)
      if (obj.hasOwnProperty(i)){
        arr.push([`${i}`, obj[i]]);
      }
      // if (`${i}` != 'inheritance' && `${i}` != 'keyOnProto'){
      //   arr.push([`${i}`, obj[i]]);
  
      // }
    }
    return arr
  }
//   console.log(entries(obj2))
    //given an object, return a 2d array of key value pairs. 
    // expected return array: [[key1, val1], [key2, val2] ...]
    // Do not inherit the inherited proto
  
  
  
  
  // ***********************************************Insert*********************************************************
  
  
  
  const table = "users";
  const insertData1 = { first_name: "John", last_name: "Doe" };
  const expected4 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";
  
  // Bonus:
  const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
  };
  const expected5 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
  // Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.
  
  /*
  make 2d array with entries()
  loop though 2d array  
    grab index 0 of EACH array = all the keys
      put into first insert statement
    grab index 1 of EACH array= all the value 
      put into second insert statement
  
  array[0][0]
  */

  
    // return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`
    
  
    
  
  insert(table, insertData1)
  
  // Generates a SQL insert statement from the inputs
  // Tip: string interpolation (`) will make it easy to add variables into a string or to add quotations without needing to // escape them.
  
  
  
  
  // function insertFunctional(tableName, columnValuePairs) {
  //   //Bonus: Write a 2nd solution focusing on functional programming using built in methods
  // }
  
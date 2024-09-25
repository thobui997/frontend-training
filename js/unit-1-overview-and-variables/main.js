// synxtax: var identifier = value;
var age = 20;
var name = "duy";

console.log("age", age);
console.log("name", name);

age = 21;
name = "long";

console.log("age", age);
console.log("name", name);

// naming convension: camelCase
// 1. identifier cannot start with number
// 2. identifier cannot contain space
// 3. identifier cannot contain special character
// 4. identifier cannot contain keyword
var fullName = "vu huu duy";
var dayOfWeek = "Monday";
var secondInMinute = 60;
var year = 2024;
console.log(fullName);

// data types
// 1. number
var number1 = 10;
var number2 = 10.5;

// 2. string
var fullName = "vu huu 'duy'";
var dayOfWeek = 'Monday "vu huu duy"';

// 3.boolean: true or false
var isMyCar = true;

// 4. array
var array = [1, 2, 4, 5, 6, "tho", true, [1, 2, 3]];

// 5. object
var personInfo = {
  name: "vu huu duy",
  age: 21,
  address: "thai binh",
  array: [1, 2, 4, 5, 6, "tho", true, [1, 2, 3]]
};

// 6. undefined
var undefinedVariable;
console.log(undefinedVariable);

// 7. bigint, symbol, null

// kiem tra 1 bien dang chua kieu du lieu gi?
console.log(typeof isMyCar);
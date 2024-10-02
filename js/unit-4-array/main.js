// create an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var a = [1, "b", true, false];
console.log(numbers);

// access element
console.log(numbers[0]);
console.log(numbers[9]);
console.log(a[1]);

// assign new value
numbers[1] = 100;
console.log(numbers);

// find a length of array
console.log(numbers.length);

// access last item
console.log(numbers[numbers.length - 1]);

// reduce length
var numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.length); // 5
numbers2.length = 2;
console.log(numbers2); // [1,2]

// split method: convert a string to an array
var str = "Duy,Long;Dang;Hieu";
var names = str.split(",");
console.log(names);

// convert array -> string
var myData = ["manchester", "london", "american"];
console.log(myData.join("-"));

// add a element into last
myData.push("viet nam");
console.log(myData);

// remove last element
myData.pop();
console.log(myData);

// add a element into fist
myData.unshift("ha noi"); 
console.log(myData);

// remove first element
myData.shift();
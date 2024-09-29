var so_nguyen = 10; // int
var so_thuc = 10.5; // float
var PI = 3.1245645412312321321; // double

console.log(so_nguyen);
console.log(so_thuc);

// lay so sau dau thap phan: toFixed()
console.log(PI.toFixed(3));

//  convert string to number
var a = "12345";
console.log(typeof a);

var b = Number(a);
console.log(b);
console.log(typeof b);

// convert number to string
var numberToString = so_nguyen.toString();
console.log("numberToString", typeof numberToString);

// arithmetic operators
var a1 = 10;
var b1 = 2;
console.log("a + b = ", a1 + b1);
console.log("a - b = ", a1 - b1);
console.log("a * b = ", a1 * b1);
console.log("a / b = ", a1 / b1);
console.log("a % b = ", a1 % b1);
console.log("a ** b = ", a1 ** b1);

// assignment operators
var c = 10;
var d = 2;
c += d;
console.log("c += d = ", c);
c -= d;
console.log("c -= d = ", c);
c *= d;
console.log("c *= d = ", c);
c /= d;
console.log("c /= d = ", c);
c %= d;
console.log("c %= d = ", c);
c **= d;

// increment and decrement operators
var e = 10;
// e = e + 1
console.log("e++ = ", e++); // 10
// e = e - 1
console.log("e-- = ", e--); // 11

var f = 11;
console.log("--f = ", --f); // 10
console.log("++f = ", ++f); // 11

var g = 15;
console.log("g++ = ", g++); // 15
console.log("--g = ", --g); // 15
console.log("g-- = ", g--); // 15
console.log("g++ = ", g++); // 14

// comparison operators
var a2 = 10;
var b2 = "10";
console.log("a > b = ", a2 > b2); // true
console.log("a < b = ", a2 < b2); // false
console.log("a >= b = ", a2 >= b2); // true
console.log("a <= b = ", a2 <= b2); // false
console.log("a == b = ", a2 == b2); // true
console.log("a != b = ", a2 != b2); // true
console.log("a === b = ", a2 === b2); //
console.log("a !== b = ", a2 !== b2); //

var a3 = 10;
var b3 = "1";

console.log("a3 == b3 = ", a3 == b3); // true
console.log("a3 === b3 = ", a3 === b3); // false

// concat string
var c3 = a3 + b3;
console.log(c3); 

var d3 = 10 + Number(b3);
console.log(d3); // 11
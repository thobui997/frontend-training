var a = 15;
var b = "abc";

if (a > b) {
	console.log("a lớn hơn b");
} else if (a === b) {
	console.log("a === b");
} else if (a < b) {
	console.log("a < b");
} else {
	console.log("khong thoa man");
}

// logical operator
var choice = "sunny";
var temp = 37;

if (choice === "sunny" && temp < 37) {
	console.log("toi se di choi, len ho guom");
}

if (choice === "sunny" || temp > 37) {
	console.log("o nha bat dieu hoa");
}
// ! operator
// !false -> true
// !true -> false

/**
 * Chỉ số BMI = trọng lượng / (chiều cao * 2)
 * BMI < 18.5 -> in ra "Dưới tiêu chuẩn"
 * 18.5 < BMI =< 25 -> in ra "Chuẩn"
 * 25 < BMI =< 30 -> in ra "Thừa cân"
 * 30 < BMI =< 40 -> in ra "Béo, cần giảm cân"
 * Trên 40 -> in ra "Rất béo, cần giảm cân ngay"
 */

// switch ... case

// switch (thang_can_so_sanh) {
//   case lua_chon_1:
// 	  // run this code;
// 	  // more code.....
// 		break;
// 	case lua_chon_2:
// 		// run this code;
// 	  // more code.....
// 		break;

// 	default:
// 		// run this code
// 		break;
// }

var field = "class";
switch (field) {
	case "class":
		console.log("class");
		break;

	case "car":
		console.log("car");
		break;

	case "password":
		console.log("password");
		break;

	case "username":
		console.log("username");
		break;

	case "phonenumber":
		console.log("phonenumber");
		break;

	default:
		console.log("khong co thang nao thoa man");
		break;
}

var month = 1;

switch (month) {
	case 1:
	case 2:
	case 3:
		console.log("thang 1");
		break;

	case 4:
		console.log("thang 4");
		break;

	default:
		console.log("khong ong nao thoa man");
		break;
}

// ternary operator: (condition) ? run this code : nguoc_lai

var a = 5;
var b = 10;

// if(a > b) {
// 	str = "a > b";
// } else {
// 	str = "a < b"
// }

// c1: (a > b) ? str = "a > b" : str = "a < b";
var str = a > b ? `${a} > ${b}`: `${a} < ${b}`;
console.log(str);
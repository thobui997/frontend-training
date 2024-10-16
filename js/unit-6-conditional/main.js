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

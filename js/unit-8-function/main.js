function calculateSum(a, b) {
	var sum = a + b;
	console.log(sum);
}

calculateSum(12, 12); // thực thi đoạn code bên trong calculateSum
calculateSum(20, 12);
calculateSum(20, 12, 15);
calculateSum(20);

// parameters: tham số -> đầu vào của funtion n nhận

// return: trả về
function calculateSum1(a, b) {
	var sum = a + b;
	return sum;
}

var tong = calculateSum1(12, 13); // 25
console.log(tong);

var c = tong + 45;
console.log(c);



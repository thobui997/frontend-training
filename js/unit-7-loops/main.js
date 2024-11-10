// in so tu 1 den 10
for (var i = 1; i <= 10; i = i + 2) {
	// console.log(i);
}
// code ....

// in ra cac so chan tu 1 -> 20
for (var i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		// console.log(i);
	}
}

// in cac so trong mang nay
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // i <= 10 -> i < numbers.length
for (var i = 0; i < numbers.length; i++) {
	// lay ra gia tri cua mang arr[index]
	// var value = numbers[i];
	// console.log(value);
}

// in cac so tu 10 -> 1
for (var i = numbers.length - 1; i >= 0; i--) {
	var value = numbers[i];
	console.log(value);
}

// tính tổng các số trong mảng
var numbers1 = [1, 2, 3, 4, 5]; // 15
var sum = 0;
for (var i = 0; i < numbers1.length; i++) {
	sum += numbers[i];
}
console.log(sum);

/// khi gặp câu lệnh break, sẽ thoát ra khỏi vòng for
// in ra ten cac con meo
var cats = ["kitty", "doremon", "doremi", "meo anh long ngan"];
for (var i = 0; i < cats.length; i++) {
	console.log(cats[i]); // i = 0 -> kitty
	break;
}

///  continue: bỏ qua lần lặp hiện tại
// in ra so le ma n tim thay dau tien
var numbers2 = [4, 6, 10, 12, 3, 7, 20];
for (var i = 0; i < numbers2.length; i++) {
	if (numbers2[i] % 2 !== 0) {
		continue;
	}
	console.log(numbers2[i]);
}

/// while
var j = 13;
	// while (j < numbers.length) {
	// 	console.log(numbers[j]);

	// 	j++;
	// }

/// do ... while
do {
	// code
	console.log("xin chao")
	console.log(numbers[j]);

	j++;
} while(j < numbers.length)


var timKiem = 11;
// tim kiem phan tu trong mang = 11, 
// neu khong thay thi in ra -1

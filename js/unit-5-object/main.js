var person = {
	// properties
	name: "Duy",
	age: 20,
	height: "1m70",
	weight: 100,
	isMale: true,

	address: {
		city: "Thai binh",
		district: "Thai Thuy",
	},

	phones: ["0962232321", "092382832", "09767676"],

	// methods
	smile: function () {
		console.log("laugh laugh");
	},
};

// dot notation
console.log(person.name);
console.log(person.age);
console.log(person.height);
console.log(person.smile());
console.log(`${person.address.district}, ${person.address.city}`);
console.log(person.phones[1]);

// bracket notation
var age = 'age';
var city1 = 'city';
console.log("bracket notation", person['name']);
console.log("bracket notation", person['address'][city1]);
console.log(person[age]);

// setting
person.name = 'Long';
person['name'] = 'Dang';
console.log(person.name);

person.phones[1] = '0123456789';
console.log(person.phones);

person['address'][city1] = 'Ha Noi';
person.address[city1]
console.log(person.address[city1]);


/**
 * tao 1 doi tuong car (o to) 
 * co cac thuoc tinh:
 * - color
 * - model
 * - factory
 * - date
 * co chuc nang:
 * - bam coi
 * - phanh
 */
'use strict';
addToAll

let remembered;

function id() {
	return "UP814446";
	// e.g. return "UP654321";
}

function fn() {
	return "Sam";
}

function sn() {
	return "Mercer";
}

function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function checkObject(object) {
	object.checked = true;
}

function checkObjectInside(object) {
	if (object.data != null) {
		object.data.checked = true;
	}
}

function arraySet(array, index, param1) {
	if (index === parseInt(index)) {
		if (index < array.length) {
			array[index] = param1;
		}
	}
}

function addAll(array) {
	let sum = 0;
	for (const i of array) {
		sum += i;
	}
	return sum;
}

function larger(x, y) {
	return Math.max(x, y);
}

function largest(array) {
	return Math.max(...array);
}

function compare(var1, var2) {
	return (var1.toString() === var2.toString());
}

function addToAll(array1, param) {
	return array1.forEach(function (element, index) {
		array1[index] = param + element;
	});
}

function rememberThis(param) {
	remembered = param;
}

function nArray(n) {
	let array = [];
	for (let i = 0; i <= n; i++) {
		array[i] = i;
	}
}

function addAllOpt(array) {
	let sum = 0
	if (array != null) {
		array.forEach(element => {
			sum += element;
		});
	}
	return sum;
}

function divisors(array, divisor) {
	if (array != null) {
		array.forEach(function (element,index) {
			array[index] = element/divisor;
		});
	}
}

function multiples(n,m) {

}
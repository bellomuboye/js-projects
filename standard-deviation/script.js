const form = document.querySelector("#input-form");
const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submit-btn");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputValue = input.value;
	console.log(inputValue);
	console.log(typeof(inputValue));
})


const inputArray = [15,16,16,17,17,17,18,18,18,19,20];

var sumAll = (arr) => {
	var sum = arr.reduce(function (a,b) {
		return a + b;
	});
	return sum;
};

var findMean = (arr) => {
	let sum = sumAll(arr);
	let mean = sum / arr.length;
	return mean;
};

var findVariance = (arr) => {
	let varianceArr = [];
	let mean = findMean(arr);
	let calculate;
	arr.forEach( function(number, index) {
		number = number - mean;
		number = number * number;
		varianceArr.push(number);
	});
	let sum = sumAll(varianceArr);
	let variance = sum / arr.length;
	return variance;
};

var standardDev = (arr) => {
	let variance = findVariance(arr);
	let standardDev = Math.sqrt(variance);
	return standardDev;
}

console.log(standardDev(inputArray));
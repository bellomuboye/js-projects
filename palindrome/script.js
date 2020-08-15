const form = document.querySelector(".form");
const input = document.querySelector("#input");
const submitBtn = document.querySelector(".submit");
const result = document.querySelector(".result");



const reverseString = (str) => {
    return str.split('').reverse().join('');
};

const palinCheck = (str) => {
	let reversed = reverseString(str);
	if (str == reversed) {
		return true;
	} else {
		return false;
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputValue = input.value;
	if (palinCheck(inputValue)) {
		result.innerHTML = "Yeah! You found one"
	} else {
		result.innerHTML = "Check again!"
	}
})
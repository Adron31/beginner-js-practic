
//js-1
let myNumber = 0;
let MyNumber = 1;
let my_number = 2;
console.log('myNumber: ' + myNumber);
console.log('MyNumber: ' + MyNumber);
console.log('my_number: ' + my_number);

alert('myNumber: ' + myNumber);
alert('MyNumber: ' + MyNumber);
alert('my_number: ' + my_number);

//js-2
let str = 'HTML';
str = str.toLowerCase();
console.log(str);

//js-3
let user_name = prompt('введите ваше имя');
alert('ваше имя ' + user_name);

//js-4
let arr = ['Саша', 'Петя', 'Оксана'];
let new_arr = arr.slice().reverse();
new_arr[1] = 'Олег';
console.log(new_arr);
console.log(arr);
arr.reverse().splice(1, 1, 'Олег');
console.log(arr);

//js-5
let x = + prompt('введите первое число');
let y = + prompt('введите второе число');
if (x > y) {
	alert(x + y);
} else if (x < y) {
	alert(x * y);
} else if (x === y) {
	alert('числа одинаковы');
}

//js-6
let array = [10, 20, 30, 50, 235, 3000];
array.forEach(function (elem, i) {
	if (elem.toString().startsWith('1') || elem.toString().startsWith('2') || elem.toString().startsWith('5')) {
		alert(elem);
	}
});

//js-7
let weight = 5.6;
let recomendation = '';

if (weight < 4) {
	recomendation = 'Пора перекусить';
} else if (weight >= 4 && weight <= 5.5) {
	recomendation = 'Вес в норме';
} else if (weight > 5.5) {
	recomendation = 'Пора на тренировку';
}
console.log(recomendation);

//js-8
function calcFinalGrade (exam_grade = 0, number_projects = 0) {
	if (exam_grade > 90 || number_projects > 10) {
		return 100;
	} else if (exam_grade > 75 || number_projects > 4) {
		return 90;
	} else if (exam_grade > 50 || number_projects > 1) {
		return 75;
	} else {
		return 0;
	}
};
console.log(calcFinalGrade(76, 1));

//js-9
function multiplication (array) {
	return array.reduce((product, current) => product * current, 1);
}
console.log(multiplication([1, 2, 3, 4]));

//js-10
function removUnwantedNames (names_list) {
	const unwanted_names = ['Дима', 'Саша', 'Ольга', 'Никита'];
	const desired_names = [];
	names_list.forEach((name, i) => {
		if (!unwanted_names.includes(name, 0)) {
			desired_names.push(name);
		}
	});
	return desired_names;
}
console.log(removUnwantedNames(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга',]));

//js-11
function multiDifferens (arr1, arr2) {
	return multiplication(arr1) - multiplication(arr2);
}
console.log(multiDifferens([15, 20, 25], [10, 30, 25]));

//js-12
function between (a, b) {
	let numbers = [];
	for (let i = a; i <= b; i++) {
		numbers.push(i);
	}
	return numbers;
}
console.log(between(4, 4));

//js-13
function hexToDec (value) {
	return parseInt(value, 16);
}
console.log(hexToDec('-C'));

//js-14
function removeExclamationMarks (str, n) {
	let arr = str.split('');
	let index = 0;
	while (n != 0) {
		index = arr.indexOf('!', 0);
		if (index + 1) {
			arr.splice(index, 1);
			--n;
		} else {
			n = 0;
		}
	}
	return str = arr.join('');
}
console.log(removeExclamationMarks("!!!Hi !!hi!!! !hi", 0));

//js-15
function maxDiff (arr) {
	if (arr.length > 1) {
		arr.sort((a, b) => a - b);
		console.log(arr);
		return arr[arr.length - 1] - arr[0];
	} else {
		return 0;
	}
}
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]));

//js-16
function sentenceToWords (str, n) {
	str = str.replace(/[.,?:;!""/-]/g, '');
	let arr = str.split(' ');
	return arr.filter(elem => elem.length > n);
}
console.log(sentenceToWords('Над городом облака, коридоры, берега, проспект, река.', 7));

//js-17
function divisibleByThree (str) {
	const arr = str.split('');
	const sum = arr.reduce((sum, current) => sum + +current, 0);
	if (sum % 3 === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(divisibleByThree('88'));

//js-18
function spacey (arr) {
	let newArr = [];
	let i = arr.length;
	while (i--) {
		newArr[i] = arr.reduceRight((result, current) => current + result, '');
		arr.pop();
	}
	return newArr;
}

function spacey2 (arr) {
	return arr.map((elem, i) => {
		do {
			if (i === 0) {
				return elem;
			} else {
				elem = arr[i - 1] + elem;
			}
		} while (i--);
	});
}

function spacey3 (arr) {
	for (let i = arr.length - 1; i; i--) {
		arr[i] = unite(arr, i);
	}
	return arr;
}
function unite (arr, i) {
	if (i === 0) {
		return arr[i];
	} else {
		return unite(arr, i - 1) + arr[i];
	}
}

console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));
console.log(spacey2(['kevin', 'has', 'no', 'space']));
console.log(spacey3(['this', 'cheese', 'has', 'no', 'holes']));

//js-19
function evensAndOdds (number) {
	if (number % 2 === 0) {
		return number.toString(2);
	} else {
		return number.toString(16);
	}
}
console.log(evensAndOdds(13));

//js-20
function arrayToObject (arr) {
	let obj = {};
	let dataTypes = [];

	arr.forEach(elem => {
		if (!dataTypes.includes(typeof (elem), 0)) {
			dataTypes.push(typeof (elem));
		}
	});

	for (const dataType of dataTypes) {
		obj[dataType] = arr.filter((elem) => typeof (elem) === dataType);
	}
	return obj;
}

console.log(arrayToObject(['a', 1, 2, false, 'b']));

//js-21
function replaceAB (str) {
	return str.replace(/a/g, 'd').replace(/b/g, 'a').replace(/d/g, 'b');
}

console.log(replaceAB('aabacbaa'));
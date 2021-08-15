/*
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
*/
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
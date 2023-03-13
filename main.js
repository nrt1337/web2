const variant = +prompt("Выберите задачу от 1 до 5", "");

switch (variant) {
	case 1:
		console.log("Выбрана задача 1");

		function convertSpeed(speed, dir) {
			if (dir == 1) {
				return speed / 3.6;
			} else {
				return speed * 3.6;
			}
		}

		let a = +prompt("Введите скорость", "");
		let b = +prompt("Во что перевести: 1 - в м/с; 2 - в км/ч", "");

		res = convertSpeed(a, b);
		if (b == 1) {
			console.log(`convertSpeed(${a}, 'toMS') -> '${res} м/с'`);
		} else if (b === 2) {
			console.log(`convertSpeed(${a}, 'toKMH') -> '${res} км/ч'`);
		}

		break;

	case 2:
		console.log("Выбрана задача 2");

		function absValue(num) {
			return Math.pow(Math.pow(num, 2), 1 / 2);
		}
		let c = +prompt("Введите число", "");
		res1 = absValue(c);

		console.log(`absValue(${c}) -> ${res1}`);
		break;

	case 3:
		console.log("Выбрана задача 3");

		let gr = prompt("Введите группу", "");
		let fname = prompt("Введите имя", "");
		let lname = prompt("Введите фамилию", "");

		let student = {
			group: gr,
			last_name: lname,
			first_name: fname,
		};

		console.log(
			`Студент ${student.first_name} ${student.last_name} учится в группе ${student.group} `
		);

		let objKeys = Object.keys(student).join(" ,");
		console.log("Список свойств:", Object.keys(student).join(", "));

		break;

	case 4:
		console.log("Выбрана задача 4");

		let d = +prompt("Введите минимальное число", "");

		if (isNaN(d)) {
			alert("Вы ввели не число");
			break;
		}

		let e = +prompt("Введите максимальное число", "");

		if (isNaN(e)) {
			alert("Вы ввели не число");
			break;
		}

		if (d >= e) {
			console.log(
				`Минимальное число больше максимального, введите число меньше ${e}`
			);
			d = +prompt("Введите минимальное число", "");
		}

		function randomNumber(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		let res2 = randomNumber(d, e);
		console.log(`randomNumber(${d}, ${e}) -> ${res2}`);
		break;

	case 5:
		console.log("Выбрана задача 5");
		let arr = [];
		let l = +prompt("Введите кол-во элементов массива", "");
		for (let i = 0; i < l; i++) {
			arr.push(Math.round(Math.random() * 100));
		}

		let count = +prompt("Введите кол-во элементов для вывода");
		function randArray(count) {
			let arr2 = [];
			for (let j = 0; j < count; j++) {
				arr2.push(arr[randomNumber(0, arr.length)]);
			}
			return arr2;
		}

		let res3 = randArray(count);
		console.log(`sampleArray([${arr}], ${count}) -> [${res3}])`);
		break;
}

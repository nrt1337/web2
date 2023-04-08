const modal = document.getElementById("myModal");
const btn = document.getElementsByClassName("button1");
const modal2 = document.querySelector(".modal_body");

btn[0].addEventListener("click", () => {
	modal.style.display = "block";
});

modal2.addEventListener('click', (e) => {
	if (e.target == modal2){
		modal.style.display = "none";	
	}
});

const password = document.getElementById("pass");
const checkPass = document.getElementById("checkPass");

checkPass.addEventListener("pointerdown", () => {
	pass.type = "text";
});

checkPass.addEventListener("pointerup", () => {
	pass.type = "password";
});

const error = document.getElementById("error");
const mail = document.getElementById("mail");

mail.addEventListener("blur", () => {
	if (mail.validity.typeMismatch) {
		error.textContent = "Ошибка! Проверьте адресс электронной почты.";
		mail.setCustomValidity("Ошибка! Проверьте адресс электронной почты.");
	} else if (mail.validity.valueMissing) {
		error.textContent = "Ошибка! Заполните поле.";
		mail.setCustomValidity("Ошибка! Заполните поле.");
	} else {
		error.textContent = "";
		mail.setCustomValidity("");
	}
});

pass.addEventListener("blur", () => {
	if (pass.validity.tooShort) {
		error.textContent = "Ошибка! Минимум 6 символов.";
		pass.setCustomValidity("Ошибка! Минимум 6 символов.");
	} else if (pass.validity.valueMissing) {
		error.textContent = "Ошибка! Заполните поле.";
		pass.setCustomValidity("Ошибка! Заполните поле.");
	} else {
		error.textContent = "";
		pass.setCustomValidity("");
	}
});

const form = document.getElementsByClassName('modal_form')

form[0].addEventListener("submit", (e) =>{
	let data = new FormData(form);
	console.log(data.getAll());
	e.preventDefault()
}) 
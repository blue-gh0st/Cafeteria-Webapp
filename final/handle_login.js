// Hackathon Berlin 25.11.23 - 26.11.23
// Code below is licensed under the MIT license.
// Credit: Gavriil Rodygin

function get_credentials() {
	username = document.getElementById('username').value;
	password = document.getElementById('password').value;
	email = document.getElementById('email').value;
	alert(username)
	alert(email)
	alert(password)
}

function register() {
	username = document.getElementById('username').value;
	email = document.getElementById('email').value;
	password = document.getElementById('password').value;
	password_repeat = document.getElementById('password_repeat').value;
	if (!(password == password_repeat)) {
		alert("Passwort stimmt nich mit dem zweiten ein.")
	} else {
		alert(username)
		alert(password)
		alert(email)
	}
}

function send_email() {
	email = document.getElementById('email').value;
	alert(email)
}

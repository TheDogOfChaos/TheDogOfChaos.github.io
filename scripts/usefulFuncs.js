"use strict"; // don't want no booboos
const root = document.querySelector(':root');
let cookie = getCookie("darkmode");
let darkmode = cookie === "true"

window.onload = darkLoad;

function darkLoad() {
	if (darkmode) {
		// light mode
		root.style.cssText = "--box-bgColor: #ffffff;--rConGradLight: #00ff00;--rConGradDark: #008000;--textColor: #000000;--buttonColor: #ffffff;--dim-bg: 0;--section-bgColor: #9cff9c;--hr-color: #80c080;--link-color: #008000;";
		document.getElementById("light").style.display = "block";
		document.getElementById("dark").style.display = "none";
	} else {
		// dark mode
		root.style.cssText = "--box-bgColor: #353535;--rConGradLight: #ff00ff;--rConGradDark: #800080;--textColor: #ffffff;--buttonColor: #404040;--dim-bg: 0.75;--section-bgColor: #630063;--hr-color: #c080c0;--link-color: #c000c0;";
		document.getElementById("light").style.display = "none";
		document.getElementById("dark").style.display = "block";
	}
}
function darkToggle() {
	darkmode = !darkmode;
	setCookie("darkmode", darkmode, 365);
	darkLoad();
}

function setCookie(cookieName, cookieValue, daysTillExpiry) {
	const date = new Date();
	date.setTime(date.getTime() + (daysTillExpiry * 24 * 60 * 60 * 1000));
	let expires = "expires="+date.toUTCString();
	try {
		document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
	} catch (error) {
		console.error("Failed to set cookie! "+error)
	}
	
}

function getCookie(cookieName) {
	let name = cookieName + "=";
	let cookies = document.cookie.split(';');
	for(let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return null; // No cookie :(
}

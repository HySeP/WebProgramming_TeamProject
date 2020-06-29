/*
*
*/

function setCookie(name, value, day) {
	var day = new Date();
	// ms단위기에 1초로 변환->60초->60분->24시간->최종적으로 day
	day.setTime(day.getTime() + (1000 * 24 * 60 * 60 * day));
	var expires = "expires=" + day.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
	var cookieArr = document.cookie.split(";");
	 
	for (var i in cookieArr) {
		if(cookieArr[i].split("=")[0].trim() == "username")
		if (cookieArr[i][cookieArr[i].length - 1] != "=")
			return cookieArr[i].split("=")[1];
	}
	return "";
}

function checkCookie() {
	var user = getCookie("username");
	if (user != "") {
		alert("다시 오셨네요 ?? " + user + "님");
	}
	else {
		user = prompt("처음오셨군요? 이름이 무엇인가요?", "예) 홍길동");
		if (user != "" && user != null)
			setCookie("username", user, 365);
	}
}
 
function delCookie() {
	document.cookie = "username =; expires = Wed; 01 Jan 1970";
}
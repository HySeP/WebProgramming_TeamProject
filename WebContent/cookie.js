/*
*
*/

function setCookie(key, value, hour) {
	var data = {
		key: key,
		value: value
	}
	
	var cookieJson = getCookieArray();
	var inserted = false;
	
	for(var i=0; i<cookieJson.length; i++) {
		var cookieData = cookieJson[i];
		if (cookieData.key == key) {
			cookieJson[i] = data;
			inserted = true;
		}
	}
	
	if (!inserted)
		cookieJson.push(data);
	
	var day = new Date();
	day.setTime(day.getTime() + (1000 * 3600 * hour));
	var expires = "'expires=" + day.toUTCString();
	document.cookie = "jsondata='" + JSON.stringify(cookieJson) + expires + ";path=/";
}
function getCookie(key) {
	var cookieJson = getCookieArray();
	var value = undefined;
	for(var i=0; i<cookieJson.length; i++) {
		var cookieData = cookieJson[i];
		if (cookieData.key == key) {
			value = cookieData.value;
		}
	}
	return value;
}
 
function getCookieArray() {
	var jsonData = document.cookie;
	var start = jsonData.lastIndexOf("jsondata='");
	if (start >= 0) {
		start += 10;
		var end = jsonData.indexOf("'expires=", start);
		jsonData = jsonData.substring(start, end);
	}
	
	var cookieJson;
	
	try {
		cookieJson = JSON.parse(jsonData);
	} catch(err) {
		cookieJson = []
	}
	return cookieJson;
}


function resetCookie() {
	document.cookie = "[] expires = Wed; 01 Jan 1970";
}
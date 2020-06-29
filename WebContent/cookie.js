/*
*
*/

function setCookie(key, value, hour) {
	var data = {
		key: key,
		value: value
	}
	//alert("쿠키 준비 : "+JSON.stringify(data));
	
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
	//alert("쿠키 저장됨 : "+document.cookie);
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
		//alert("jsonData = "+jsonData+", start = "+start);
		var end = jsonData.lastIndexOf("'expires=");
		jsonData = jsonData.substring(start, end);
		//alert("start = "+start+", end = "+end+", jsonData = "+jsonData);
	}
	
	var cookieJson;
	
	try {
		cookieJson = JSON.parse(jsonData);
	} catch(err) {
		cookieJson = [{
			key: "test",	
			value: 0
		}]
		//alert("parsing error");
	}
	return cookieJson;
}


function resetCookie() {
	document.cookie = "[] expires = Wed; 01 Jan 1970";
}
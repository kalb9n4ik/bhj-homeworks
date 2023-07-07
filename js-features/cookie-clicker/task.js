const imageCookie = document.getElementById("cookie")
const clickerCounter = document.getElementById("clicker__counter")
const clickerTimer = document.getElementById("clicker__timer")
let oldDate = 0;
let newDate = 0;


imageCookie.onclick = function() {
	
	

	if(clickerCounter.textContent > 0) {
		oldDate = newDate
		newDate = new Date();
		clickerTimer.textContent = (1 / ((newDate - oldDate) / 1000)).toFixed(2);
	} else {
		newDate = new Date();
	}
	
	clickerCounter.textContent++;

	if(clickerCounter.textContent % 2 !== 0) {
		imageCookie.width = 300;
		imageCookie.height = 150;
	} else {
		imageCookie.width = 200;
		imageCookie.height = 127;
	}
	
};


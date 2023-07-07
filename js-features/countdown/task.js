const timer = document.getElementById("timer")
let counter = timer.textContent

timer.textContent = hhmmssCalc(counter)

const intervalId = setInterval(timerView, 1000);

function timerView() {
	--counter;
	timer.textContent = hhmmssCalc(counter)

		if(counter === -1) {
			clearInterval(intervalId)
			alert("Вы победили в конкурсе")
			timer.textContent = "0";
	}

}

function hhmmssCalc(seconds) {
	let hoursTimer = Math.trunc((counter / 3600));
	let minutesTimer = Math.trunc(((counter - (hoursTimer * 3600)) / 60));
	let secondsTimer = counter - (hoursTimer * 3600) -  (minutesTimer * 60);

	if(hoursTimer < 10){
		hoursTimer = "0" + hoursTimer;
	}

	if(minutesTimer < 10){
		minutesTimer = "0" + minutesTimer;
	}

	if(secondsTimer < 10){
		secondsTimer = "0" + secondsTimer;
	}

	return `${hoursTimer}:${minutesTimer}:${secondsTimer}`;
}

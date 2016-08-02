/*jslint browser: true*/
/*global window */
(function () {
	"use strict";
	
	var secondRemaining;
	var intervalHandle;

	function resetPage() {
		document.getElementById("inputArea").style.display = "block";
	}



	function tick() {
		var timeDisplay = document.getElementById("time");
		var min = Math.floor(secondRemaining / 60);
		var sec = secondRemaining - (min * 60);

		if (sec < 10) {
			sec = "0" + sec;
		}

		var message = min + ":" + sec;
		timeDisplay.innerHTML = message;

		if (secondRemaining === 0) {
			alert("Done");
			clearInterval(intervalHandle);
			resetPage();
		}
		secondRemaining -= 1;
	}



	function startCountDown() {
		var minutes = document.getElementById("minutes").value;

		if (isNaN(minutes)) {
			alert("Please enter a number!");
			return;
		}
		secondRemaining = minutes * 60;
		intervalHandle = setInterval(tick, 1000);
		document.getElementById("inputArea").style.display = "none";
	}



	window.onload = function () {
		var inputMinutes = document.createElement("input");
		inputMinutes.setAttribute("id", "minutes");
		inputMinutes.setAttribute("type", "text");

		var startButton = document.createElement("input");
		startButton.setAttribute("type", "button");
		startButton.setAttribute("value", "Start count");
		startButton.onclick = function () {
			startCountDown();
		};

		document.getElementById("inputArea").appendChild(inputMinutes);
		document.getElementById("inputArea").appendChild(startButton);
	};
}());

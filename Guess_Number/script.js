"use strict";

// console.log(document.querySelector(".message").textContent)

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10
// document.querySelector('.guess').value = 15

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
	document.querySelector(".number").textContent = number;
};
displayNumber("?");
document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);
	// no input
	if (!guess) {
		displayMessage("🚫  No Number!");
		// win
	} else if (guess === secretNumber) {
		displayMessage("💥 You did it!");
		score++;
		document.querySelector(".score").textContent = score;
		displayNumber(secretNumber);
		document.querySelector(".number").style.backgroundColor = "rgb(0, 70, 10)";
		document.querySelector(".number").style.color = "#eee";
		document.querySelector(".number").style.borderRadius = "50%";

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// Guessed wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("You lost the game! 😭");
			document.querySelector(".score").textContent = 0;
		}
		// Too Low
	} else if (guess !== secretNumber) {
		if (score > 1) {
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "You lost the game! 😭";
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".message").textContent = "Start Guessing...";
	document.querySelector(".score").textContent = score;
	displayNumber("?");
	document.querySelector(".guess").value = "";
	document.querySelector(".number").style.backgroundColor = "#eee";
	document.querySelector(".number").style.color = "rgb(34, 34, 34)";
	document.querySelector(".number").style.borderRadius = "0%";
});

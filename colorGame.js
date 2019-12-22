var numSquares = 6;
var colors = [];
var pickedColor;

// Selectors
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
	setupModeBtns();
	resetBtn.addEventListener("click", reset);
	setupSquares();
	reset();
}

function setupModeBtns() {
	for(i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		})
	}
}

function setupSquares() {
	for(i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var squareColor = this.style.backgroundColor;

			if(squareColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				changeColors(squareColor);
				resetBtn.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		})
	}
}

function reset() {
	resetBtn.textContent = "New Colours";
	messageDisplay.textContent = "";
	colors = generateRandomColours(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "";
	for(i = 0; i < squares.length; i++) {
		// Assign each square a colour from <colors>
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}	
}

function changeColors(color) {
	// All squares change to <color>
	for(i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function pickColor() {
	// Pick a random number between 0 and 5
	var randomIndex = Math.floor(Math.random() * colors.length);

	// Return the colour corresp. to that index
	return colors[randomIndex];
}

function generateRandomColours(num) {
	var arr = [];

	for(i = 0; i < num; i++) {
		arr.push(randomColour());
	}

	return arr
}

function randomColour() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
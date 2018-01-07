var numSq = 6;
var colors = generateRandomColors(numSq);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorPick = document.getElementById("colorPicked");
var messageDisplay = document.getElementById("winLoseMessage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn	= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	numSq = 3;
	//generate new colors
	colors = generateRandomColors(numSq);
	pickedColor = randomColor();
	colorPick.textContent = pickedColor;

	//give first 3 squares different colors
	//last 3 squares disappear
	for(var i = 0; i < squares.length; i++){
		if(i <= 2){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	numSq = 6;
	colors = generateRandomColors(numSq);
	pickedColor = randomColor();
	colorPick.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

colorPick.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare clicked color with picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Right!";
			resetButton.textContent = "Play Again?";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(color){
	//loop through all the squares again
	for(var i = 0; i < squares.length; i++){
		//now change each color to match the right color
		squares[i].style.backgroundColor = color;
	}
}

function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColorPicker());
	}
	//return the array
	return arr;
}

function randomColorPicker(){
	//pick a red value
	var red = Math.floor(Math.random() * 256);
	//pick a green value
	var green = Math.floor(Math.random() * 256);
	//pick a blue value
	var blue = Math.floor(Math.random() * 256);
	//return rgb value with correct spacing!
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSq);
	//pick a new random color from array
	pickedColor = randomColor();
	//change rgb message on page
	colorPick.textContent = pickedColor;
	//change colors of squares on the page
	for(var i = 0; i < squares.length; i++){
	//add initial to squares
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = " ";
});
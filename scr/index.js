let userScore = 0;
let compScore = 0;
// var vid = document.getElementById("myVideo");
// vid.volume = 0.4;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".nametag");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

var gameTrack = document.createElement("audio");
gameTrack.src = "image/cynthia-theme.mp3";

var win1 = document.createElement("audio");
win1.src = "image/win1.mp3";

var lose1 = document.createElement("audio");
lose1.src = "image/lose1.wav";

var tie1 = document.createElement("audio");
tie1.src = "image/tie1.wav";

gameTrack.play();

function getCompChoice(){
	
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function game(userChoice){
	window.onclick = hideChoices();
	const compChoice = getCompChoice();
	switch(userChoice + compChoice){
		case "rockscissors":
		case "scissorspaper":
		case "paperrock":
			win(userChoice, compChoice);
			break;
		case "scissorsrock":
		case "paperscissors":
		case "rockpaper":
			lose(userChoice, compChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, compChoice);
			break;
	}
}
function win(userChoice, compChoice){
	userScore++;
	win1.play();
	userScore_span.innerHTML = userScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon beat Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You won this match - Ready your next Pokemon.`;
}

function lose(userChoice, compChoice){
	compScore++;
	lose1.play();
	compScore_span.innerHTML = compScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `Your <span style="color:#00E4F2;"> ${makeWord(userChoice)}</span>-type Pokemon got beaten by Champion Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You lost this match - Ready your next Pokemon.`;
}

function draw(userChoice, compChoice){
	showCompChoice(compChoice);
	tie1.play();
	result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon is the same type as Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span> type Pokemon.<br> It's a draw! Both Pokemon fainted.`;
}
function makeWord(letter){
	if (letter === "rock") return "Grass";
	if (letter === "paper") return "Fire";
	return "Water";
}
function showCompChoice(compChoice){


	if (compChoice === "rock"){
		rock_div.classList.add("computorChoice");
	}
	if (compChoice === "paper"){
		paper_div.classList.add("computorChoice");
	}
	if (compChoice === "scissors"){
		scissors_div.classList.add("computorChoice");
	}
}


function hideChoices(){
	rock_div.classList.remove("computorChoice","playerChoice");
	paper_div.classList.remove("computorChoice","playerChoice");
	scissors_div.classList.remove("computorChoice","playerChoice");
}

function main(){
	rock_div.addEventListener('click', function(){
		game("rock");
		rock_div.classList.add("playerChoice");
	});

	paper_div.addEventListener('click', function(){
		game("paper");
		paper_div.classList.add("playerChoice");
	});

	scissors_div.addEventListener('click', function(){
		game("scissors");
		scissors_div.classList.add("playerChoice");
	})
};

main();
var vid = document.getElementById("myVideo");
vid.volume = 0.4;

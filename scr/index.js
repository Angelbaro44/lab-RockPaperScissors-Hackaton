let userScore = 0;
let compScore = 0;
// var vid = document.getElementById("myVideo");
// vid.volume = 0.4;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice(){
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function makeWord(letter){
	if (letter === "rock") return "Grass";
	if (letter === "paper") return "Fire";
	return "Water";
}
function showCompChoice(compChoice){
	if (compChoice === "rock"){
		rock_div.classList.add("comp-choice");
	}
	if (compChoice === "paper"){
		paper_div.classList.add("comp-choice");
	}
	if (compChoice === "scissors"){
		scissors_div.classList.add("comp-choice");
	}
	setTimeout(hideChoices, 1500);
}
function hideChoices(){
	rock_div.classList.remove("comp-choice","user-choice");
	paper_div.classList.remove("comp-choice","user-choice");
	scissors_div.classList.remove("comp-choice","user-choice");
}
function win(userChoice, compChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon beat Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You won this match - Ready your next Pokemon.`;
}

function lose(userChoice, compChoice){
	compScore++;
	compScore_span.innerHTML = compScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `Your <span style="color:#00E4F2;"> ${makeWord(userChoice)}</span>-type Pokemon got beaten by Champion Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You lost this match - Ready your next Pokemon.`;
}

function draw(userChoice, compChoice){
	showCompChoice(compChoice);
	result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon is the same type as Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span> type Pokemon.<br> It's a draw! Both Pokemon fainted.`;
}

function game(userChoice){
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

function main(){
	rock_div.addEventListener('click', function(){
		game("rock");
		rock_div.classList.add("user-choice");
	});

	paper_div.addEventListener('click', function(){
		game("paper");
		paper_div.classList.add("user-choice");
	});

	scissors_div.addEventListener('click', function(){
		game("scissors");
		scissors_div.classList.add("user-choice");
	})
};

main();
// var vid = document.getElementById("myVideo");
// vid.volume = 0.4;
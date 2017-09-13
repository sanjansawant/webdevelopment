

var guess=prompt("Enter the guessed number");

var guessed=7;



while(Number(guess)!==guessed){
	console.log("Try again it was wrong");
	if(guess<guessed){
		console.log("low");
	}else{
		console.log("high");
	}

	guess=prompt("Enter the guessed number");
	

}

console.log("you guess is right")
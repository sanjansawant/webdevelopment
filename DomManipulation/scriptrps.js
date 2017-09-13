var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var resetButton=document.querySelector("#reset");

var p1Scores=document.querySelector("#p1score");
var p2Scores=document.querySelector("#p2score");
var score1=0;
var score2=0;
var winningScore=false;
var numInput=document.querySelector("input");
var winningMargin=5;

var max=document.querySelector("#maxCount");

p1Button.addEventListener("click",function(){

	if(score1<winningMargin){
		score1+=1;
		if(score1===winningMargin){
			p1Scores.classList.add("winner");
		}
		p1Scores.textContent=score1;

	}


});

p2Button.addEventListener("click",function(){


	if(!winningScore){
		if(score2<winningMargin){
		score2+=1;
		if(score2===winningMargin){
			p2Scores.classList.add("winner");
		}
		p2Scores.textContent=score2;
		}else{
			winningScore=true;
		}
	}
	


});


resetButton.addEventListener("click",function(){
 console.log("changing");
 	score1=0;
 	score2=0;
	p1Scores.textContent=0;
	p2Scores.textContent=0;
	p1Scores.classList.remove("winner");
	p2Scores.classList.remove("winner");
	if(winningScore){
		winningScore=false;
	}
});


numInput.addEventListener("change",function(){

	console.log(numInput.value);
	max.textContent=numInput.value;
	winningMargin=Number(numInput.value);

})


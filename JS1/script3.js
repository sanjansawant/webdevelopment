var str="hello";


var count=0;

while(count<str.length){

	console.log(str[count]);
	count++;

}

var num1=-10;

while(num1<=19){
	console.log("1=> "+num1);
	num1++;

}

var num2=10;

while(num2<=40){
	console.log("2=> "+num2);
	num2+=2;
}

var num3=300;

while(num3<=333){
	if(num3 % 2 !==0){
		console.log("3=> "+num3)
	}
	num3++;
}

var num4=5;

while(num4<=50){

	if((num4%5===0)&&(num4%3===0)){
		console.log("4=> "+num4);
	}
	num4++;

}

/*
var position=prompt("Are we there yet");

while(!((position==="yes") || (position === "yeah"))){

	console.log("not there yet");
	position=prompt("Are we there yet");
}
console.log("Yay, we finally made it");*/

var position=prompt("Are we there yet");

while(!((position.indexOf("yes")>0 )|| (position.indexOf("yeah")>0))){

	console.log("not there yet");
	position=prompt("Are we there yet");
}
console.log("Yay, we finally made it");
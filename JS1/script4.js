
function kebabToSnake(str){

    var myString="";
	for(var i=0;i<str.length;i++){
		console.log(str.charAt(i)+"    "+str[i]);
		if(str.charAt(i)==="\-"){

			console.log(str.charAt(i)+ " replacing to \_ ");
			str[i]="\_";
			myString+="\_";
		}else{

			myString+=str[i];
		}


	}
	console.log(myString);
	return myString;

}


kebabToSnake("Hello-World");

var string="hello";

console.log(string);
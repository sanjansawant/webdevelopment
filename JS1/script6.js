

function reverse(array){

	for (var i=array.length-1;i>=0;i--){

		console.log(array[i]);
	}


}


function isUniform(array){
    var flag=true;
	for(var i=0;i<array.length-1;i++){

		if(array[i]!==array[i+1]){
			flag=false;

		}

	}
	console.log(flag);

}

function max(array){

	var max=array[0];

	for(var i=1;i<array.length;i++){

		if(array[i]>max){
			max=array[i];

		}

	}
	console.log(max);
}


reverse(["a","b","c","d"]);

isUniform(["a","b","a"]);

max([-5,-9]);
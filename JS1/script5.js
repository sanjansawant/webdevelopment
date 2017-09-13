var question=prompt("what would you like to do");

var array=[];

while(question !=="quit"){

	if(question==="new"){

		var put=prompt("Enter a new Todo");

		array.push(put);

	}else if(question === "list"){

		array.forEach(function(item,index){

			console.log(index+" : "+item);
		});


	}else if(question ==="delete"){

		var deleting=prompt("which item you want to delete");

		for(var i in array){
			if(array[i]===deleting){

				array.splice(i,1);
			}


		}

	}
	question=prompt("what would you like to do");

}
[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});


// var newMultiArray=[["a","b","c","d"],
// 					["e","f","g","h"],
// 					["i","j","k","l"]];

// console.log(newMultiArray);

// for(var i=0;i<newMultiArray.length;i++){

// 	for(var j=0;j<newMultiArray[i].length;j++){

// 		console.log(newMultiArray[i][j]);
// 	}

// }

// for(var i in newMultiArray){

// 	for(var j in newMultiArray[i]){

// 		console.log(newMultiArray[i][j]);
// 	}

// }


// console.log("For EACh");

// newMultiArray.forEach(function(i){
// 	console.log(i);
// 	i.forEach(function(j){
// 		console.log(j);
// 	})
// })
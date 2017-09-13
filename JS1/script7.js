var person={

	name:"sanjan",
	age:25,
	city:"mumbai"

};

console.log(person.name);
console.log(person["name"]);

var name=[
	"s",
	"a",
	"n",
	{age:21,
		city:"mumbai",
		hometown:"karnataka",
		comments:["<3","Go to hell I hate you"]
	},

		{
			title:"cats are awesome",
			author:"colt",
			comments:["awesome post","terrible post"]


		}
		];

		var arrayAndObject={
			name:"snajan",
			age:["21","22"]
		};


		var movieDB=[
			{
				title:"In Bruges",
				rating:5,
				hasWatched:true
			},
			{
				title:"Frozen",
				rating:4.5,
				hasWatched:false
			},
			{
				title:"Mad Max fury road",
				rating:5,
				hasWatched:true
			},
			{
				title:"Les Miserables",
				rating:3.5,
				hasWatched:false
			}

		];


		movieDB.forEach(function(movie){
				learning(movie);
		});


		function learning(movie){

		if(movie["hasWatched"]){
			console.log("You have watched \""+movie["title"]+"\" - "+movie["rating"])

			}else{
				console.log("You have not seen \""+movie["title"]+"\" - "+movie["rating"])

			}


		};


			var funcInsideObject={

					name:"chunk",
					isCool:false,
					friends:["sanjan","ajay","pushpendu"],
					add: function(x,y){
						return x*y
					}

			};


			var comments={
					likes:["sanjan","ajay","aabhas"],
					print: function(){
						this.likes.forEach(function(element){
								console.log(element);
						});	
					}


			};


			comments.print();

		// for(var i=0;i<movieDB.length;i++){

		// 	if(movieDB[i]["hasWatched"]){

		// 		console.log("You have watched \""+movieDB[i]["title"]+"\" - "+movieDB[i]["rating"])

		// 	}else{

		// 		console.log("You have not seen \""+movieDB[i]["title"]+"\" - "+movieDB[i]["rating"])

		// 	}

		// }
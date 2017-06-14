$(document).ready(function(){
$.ajax({
	type:'GET',
	url:'http://swapi.co/api/people/', //use .done and .fail
	}).done function(data){
		console.log(data);
	}
	},
	.fail(function(){
		alert("error loading data");
	}

	}

	})
};

//download postman,
	//success: function(data){
	//console.log(data.results[0].name);
	//},
	//error:function(){
	// alert("error loading data";)
	//}

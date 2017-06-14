$(document).ready(function(){
	alert("hello world");
});

var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');

var friendTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";

$(document).ready(function(){
	alert("hello world")
});

function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));

};

$(document).ready(function(){
	alert("hello world");
});



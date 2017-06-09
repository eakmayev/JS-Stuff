//continuing prevous lesson 

//object constructors
var paul = new Object;
var james = {}
paul.name = "Paul O'Connor";
paul.vocation = "Curriclum Master";
paul.hobbies = ["rocking out code", "listening to good music", "baking banana muffins"]; 
// object constructor template

function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return "There are" + this.room - this.booked + "rooms left."
	}; 
}

//the new keyword helps us intanitate a new object
var jw = new Hotel("JW Marriot", 300, 250);
var jwExp = new Hotel ("Mini J'Dubs, 100, 50");
console.log(jwExp.checkAvailability());

//creating an array of hotels
var hotels= [jw, jwExp];
//grabbing the name
console.log(hotels[1].name);

}

//console.log(jwExp.checkAvailiability());

//Create 5 person objects with attributes: name, age, favoriteShows[] (Array with at least 5 elements)
//THE FOLLOWING FOUR LINES ARE TO BE FUNCTIONS IN EACH PERSON OBJECT
//Create a function called birthday that takes in a person and adds one to their age.

// function Birthday (name, age, addOne){
// 	this.name = name;
// 	this.age = age;
// 	this.addOne = addOne;
// 	this.aging = function(){
// 		return "Turning" + (this.age + this.addone)
// 	};
// }

// var party = new Birthday("Summer", 19, "ok");
// console.log(party);


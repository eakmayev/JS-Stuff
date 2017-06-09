//objects


var empObject = {};

var johnQualls = {
// Key   :     Value
	name : "John Qualls",
	age  : 39,
	hairColor : "Brown Hair"
};

//. means grabbing whatever is in front of it, grabs a property from inside of that object
console.log(johnQualls);
console.log(johnQualls. name);
console.log(johnQualls.name + " is of the age: " + johnQualls.age);

johnQualls.height = "6ft";

console.log(johnQualls.height);
console.log(johnQualls);

//Create a animal object with the properties of type, weight, commonINindiana, and Habitat

var haski = {
	type: "Siberian",
	weight: 100,
	commonINindiana: "Not Common",
	habitat: "Siberia"
};
console.log(haski);
console.log(haski.type + " weights " + haski.weight);
//another way to grab eliments outside of the object;
//console.log(haski [type]);


//reassigning values
//animal.type = "moose"
//console.log(animal.type)

//change the weight of the animal property using square bracket notation
haski.weight = 500;


//then add a new array property of moviesAboutMe rocky & bullwinkle, Monty Python, National Lampoon's Vacation
haski.moviesAboutMe = ["Rocky & bullwinkle", "Monty Python", "National Lampoon's Vacation"];


console.log(animal)
//console.log(Objects.keys(animal))

//Objects with methods

var theBryceIsRight = {
	name     :  "Bryce Greene",
	age      :  55,
	vocation : "TA",
	email    :  "thebryceisright@gmail.com",
	greeting  : function(){
				return("Greeting earthling I am " + this.name + "I am here to learn you.");
					},

contactMe : function(){
			return ("Connect with me at " + this.email);
}

//this. means the subject we are talking about 

console.log (theBryceIsRight.greeting());

//create a method for contactMe and include the email property in a return statement











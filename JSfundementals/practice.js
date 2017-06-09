//Create 5 person objects with attributes: name, age, favoriteShows[] (Array with at least 5 elements)
//THE FOLLOWING FOUR LINES ARE TO BE FUNCTIONS IN EACH PERSON OBJECT
//Create a function called birthday that takes in a person and adds one to their age.

function Birthday (name, age, addOne){
	this.name = name;
	this.age = age;
	this.addOne = addOne;
	this.aging = function(){
		return "Turning" + (this.age + this.addone)
	};
}

var party = new Birthday("Summer", 19, "ok");
console.log(party);

//BRONZE: 
//Create a person object with different properties describing them.

function Person (name, age, occupation){
	this.name = name;
	this.age = age;
	this.occupation = occupation;
	
	this.getName = function(){
		return (this.name)	
	};

}

var Joe = new Person ("Joe", 44, "mailman");
console.log(Joe.getName());

//Add methods for each of the properties above that returns the value of the property
//(I.E. getName() returns the name).

//Create a child object that inherits all of the properties and methods from your person object.
//Add anything you want to the child object, without adding it to the person.

var Matt = Object.create(Joe);
	Matt.name = "Matt";
	Matt.age = 15;
	Matt.occupation = "student";

console.log(Matt.getName());
console.log(Matt.age);
console.log(Matt.occupation);


//Create a function that takes in person looks at their favorite shows, then prints out the shows they have in common.
//If there are no shows in common print "No shows in common"
//Create a function that prints out "Hello, my name is *** and I am *** years old, and one of my favorite shows is " 
//and then gives a random show from their list of shows


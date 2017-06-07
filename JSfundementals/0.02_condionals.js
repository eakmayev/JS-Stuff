//Conditionals 

/*

	< Greater than
	> Less than
	<= Greater or Equal
	>= Less or Equal

	== Equal to
	=== Strictly Equal to
	! Not
	!= Not Equal To
*/

console.log(1 > 3); // false? T
console.log( 10 != 10); // false

var name = "Kenn";

console.log(name == "kenn"); // false

console.log(6 == "6");//true

console.log(6 === "6"); //false

// if statements 
/*
if (boolean expression){
	//some code goes here
}
*/

if ( 242 % 2 === 0){
	console.log("this number is even");
}

var userName = "admin";
var password = "test123";

if (userName == "admin"){
	console.log ("you have been granted access!");

} else {

	//Challenge check if the username is the wrong value or the password
	console.log("Incorrect details");
	if(username == "admin"){
		console.log("the password is Incorrect");
	} else {
		console.log("the username is Incorrect");
	}
//console.Log("Incorrect details"); 

}






// if statements


var age = 20;
if ( age >= 35){
	console.log("You can vote and also hold any place in gov.")
} else if (age >= 25){
	console.log("You can vote and run for senate");
} else if (age >=18){
	console.log("You can only vote!");
} else if (age >=35){
	console.log("You can only vote and also hold any place in gov.");
} else {
	console.log("You are outta luck!");
}














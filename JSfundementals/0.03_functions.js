//Functions

/*


	function Name_of_Function(){
	
	}

	*/
//Declaring the function
	function greeting(){
		name = "Patrick";
		console.log(name + " says\"Hello Vietnam!\"");
	}
//calling the function
greeting();
console.log(name);
//Challenge declare a function that prints the weather to the console
//then call that function.

	function currentweather(){
		console.log("It's sunny yall");
	}
	currentweather ();

//function with parameters

function shoes(brand){
	console.log("Man those " + brand + " are on fleek!");
}

shoes("Crocs"); 

//void functions with multiple parameter
function add(num1, num2){
	console.log(num1 + num2);
}

add(34,66);

//void functions dont return any data

//functions that return data

function sum(num1, num2){
	return num1 + num2;
}

console.log(sum(23, 17));

var answerToQuestion = sum(23, 17);

//create functions for subtracting, mul, div, and mod

function sub(num1, num2){
	return num2 - num1;
}

console.log(sub(23,17));

function mul(num1, num2){
	return num1 * num2;
}
console.log(mul(23,17));

function div(num1,num2){
	return num2 / num1;
}

console.log(div(23 / 17));

function mod(num1, num2){
	return num1 % num2;
}

console.log(mod(23,17));


//Write a function that helps me calculate the cost of buying 100 sodas at $.99 each

function mul(num1, num2){
	return num1 * num2;
}

console.log(mul(100, .99));

//Figure in the tax there, too. The tax is 7 percent in Indiana.

function mul(num1,num2){
	return num1 * num2; 
}

console.log(mul(99,.07));

//write a message 

// function: message(){
// 	console.log(" says\"expensive\"");
// }

//Create a calculator function that accepts 3 arguments 2 numbers and 1 operator
//ex. calculator ( 2, *, 2) >> this should return 4
//hints you will need to use conditionals!!

function calculator(num1, op, num2){

	if (op == "+") {
		console.log(num1 + num2);
	}
	if (op == "-") {
		console.log(num1 - num2);
	}
	if (op == "*") {
		console.log(num1 * num2);
	}
	if (op == "/"){
		console.log(num1 / num2);
	}
	if (op == "+"){
		return num1 + num2;
	}

	}
}

calculator(3, "-", 7);
calculator(4, "*", 2);
calculator(4, "/", 2);



	






	
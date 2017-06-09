//Arrays


//{}
//				0				1		2		3			4
var students = ["Harrasion" , "Rose", "Ben", "Caitlyn", "Kay"];

students[-1] = "Steve";
students[5] = "Nick";
console.log(students);

students.push("Aaron");
console.log(students);

students.pop();
console.log(students);

//For each loop

for (var s in students){
	console.log(students [s] + "is in the position of: " + s)
}

console.log(students[0]);
console.log(students[1])
console.log(students[2])


//create a array of numbers 1 - 10 then use a for in Loop to print it to the console.

var numbers = [1,2,3,4,5,6,7,8,9,10];

for (var n in numbers){
	console.log(numbers [n])
}

//creating a for Loop that pushes numbers into a empty array

var numArry = [];

for( var num = 1; num < 11; num++){
	console.log(num);
	numArry.push(num);
	console.log(numArry);
}
// console.log(numArry);

//Mixed arrays


var time = 11;
var ranThings = ["Bryce", 45, "Summer", true, []]
console.log(ranThings);

//Create an array of your favorite hobbies.

var hobbies = ["fitness", "camping", "circus", "reading"]
console.log(hobbies);

//Create an array of awesome cars.
//Create a for loop to print out each of the cars to the console.

var cars = ["hummer", "bmw", "nissan", "lexus"]
console.log(cars);
 
for (var c in cars){
	console.log(cars [c])

}


//Create an array where each element is an array of different lists.
//(I.E. 0 is your cars, 1 is your pets, 2 is your children). 
//Create a loop to print out every element.

var Things =[["hummer", "nissan"], ["fish", "cat"], ["Matt", "Greg"]];

for (var c in Things){
	for (var n in Things[c]){
		console.log(Things [c][n]);
	}
}


//Random number should be between 0 - 50
//Create an array and fill it with 15 random numbers (Learn the random function)
//Write code to determine how many prime numbers there are

var randomArr = Array.from({length: 15}, () => Math.floor(Math.random()*50));
console.log(randomArr);
 for (var c in randomArr){
 	for (var n in randomArr(c)){
 		console.log(randomArr [c] [n]);
 	}
 }


















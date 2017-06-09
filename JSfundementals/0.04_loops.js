//Loops

// do while loop
/*
	do {
		lcv = lcv + 1
		// some code goes here
	} while ( true || false)

lcv = 0



*/


// var lcv = 0;
// do{
// 	lcv = lcv + 1;
// 	console.log(lcv);
// } while(lcv > 6);

//Create a do while loop that counts to 20 by 2's

var lcv = 0; 
do{
	lcv = lcv + 2;
	console.log(lcv);
} while (lcv < 20);

//create a do while loop that counts down from 10 to 0

var lcv = 10;
do{
	lcv = lcv - 1;
	console.log(lcv);
} while (lcv > 0);




//while loop
/*

lcv = 0
while(true || false){
	increment || decrement
}

*/
var counting = 0;

while(counting < 50){
	counting += 5;
	console.log(counting);
}


// challenge create a countdown from 10 - 0.. inctead
// of zero print blast off

var countingDown = 10;

while(countingDown > 0){
	countingDown --;
	if(countingDown == 0){
		console.log("Blast offff!");
	}else{
	console.log(countingDown);
}
}


//For loop

/*

for (lcv = 0; true or false expression ; increment || decrement){
	//code here
}


*/


for (appless = 0 ; appless <10; appless ++){
	console.log(appless);
}

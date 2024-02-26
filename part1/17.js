// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// prompt is use to take input as a "string" by user
let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// here + sign change the  data type of string into number. Because JavaScript automatically
if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var maxGuesses = 9; 

var directionsText = document.getElementById("directionsText");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("guessesSoFar");


    

// Create a function 

document.onkeyup = function(event){
    var userGuess = event.key;
    guessesSoFar.push(userGuess);
    
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
    
    

    if(userGuess === computerChoice){
     
        alert("Good Job!");
        wins++;
        document.getElementById("winsText").innerHTML = "Wins: " + wins;
        guessesSoFar = [];
        
        
    }
    

    else{
        alert("You can do better than that!");
        guessesLeft--;
        document.getElementById("guessesLeftText").innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById("guessesSoFarText").innerHTML  = "Your Guesses so far:" + guessesSoFar;
        
        
}

    if (guessesLeft === 0){
        alert("Game over. Better luck next time!");
        losses++;
        document.getElementById("lossesText").innerHTML  = "Losses:" + losses;
        guessesSoFar = [];
        guessesLeft = 0;
        
        
    }

        
        
    
};    
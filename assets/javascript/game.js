var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];

var playerWins = document.getElementById("playerWins");
playerWins.textContent = wins;

var playerLosses = document.getElementById("playerLosses");
playerLosses.textContent = losses;

var playerGuesses = document.getElementById("playerGuesses");
playerGuesses.textContent = guesses;

var playerGuessed = document.getElementById("playerGuessed");
playerGuessed.textContent = guessed;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess;

function resetGame() {
    guesses = 9;
    guessed = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}
resetGame();
document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    guesses--;

    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
      
        if (userGuess === computerGuess) {
            wins++;
            alert("You guessed it! The letter I was thinking of was " + computerGuess + "!")
            resetGame();
        }

        else {
            guessed.push(" " + userGuess);
            if (guesses === 0) {
                losses++;
                resetGame();
            }
        }
    } else {
        alert("Please select only letters a-z!")
    }

    playerWins.textContent = wins;
    playerLosses.textContent = losses;
    playerGuesses.textContent = guesses;
    playerGuessed.textContent = guessed;
};
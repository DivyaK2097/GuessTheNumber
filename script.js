const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(){
    const guess = parseInt(document.getElementById("guess").value);
    const result = document.getElementById("result");

    if(guess == randomNumber){
        result.textContent = "Congratulation!!! You guessed the correct number";
    }
    else if(guess < randomNumber){
        result.textContent = "Too low! Try to guess a higher number";
    }
    else{
        result.textContent = "Too high! Try to guess a lower number";
    }
}
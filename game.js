let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let n = Math.ceil(Math.random()*100);
function checkGuess() {
 let m = parseInt(userInput.value);
 if(m>n){
    gameResult.textContent = "Too High..! Try Again.";
    gameResult.style.backgroundColor = "red";
 }
 else if(m<n){
    gameResult.textContent = "Too Low..! Try Again.";
    gameResult.style.backgroundColor = "blue";
 }
 else if(m === n){
    gameResult.textContent = "Congrats..! You Won.";
    gameResult.style.backgroundColor = "green";
 }
 else{
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "orange";
 }
}
const buttons = document.querySelectorAll('.pick');
const scoreEle = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');
const choices= ['paper','rock','scissors'];

let score = 0; 
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      userChoice = button.getAttribute('data-choice');
     
     
      checkWinner();
      
    });
});
reset.addEventListener('click',() => {
   //show the selection hide me
   main.style.display = 'flex';
   selection.style.display = 'none';
});
 function checkWinner(){
     const computerChoice = pickRandomChoice();
     //update view
     updateSelection(user_select, userChoice);
     updateSelection(computer_select, computerChoice);
     
     
     if (userChoice === computerChoice ) {
    //draw
    winner.innerText = 'draw';
    }
    else if(
     (userChoice === 'paper' && computerChoice === 'rock') ||
    ( userChoice === 'rock' && computerChoice === 'scissors') ||
     (userChoice === 'scissors' && computerChoice === 'papaer') 
     ){
         //won
         updateScore(1);
         winner.innerText = 'win';
     } else{
         //user lost
         updateScore(-1);
         winner.innerText = 'lost';
     }
      //show the selection hide me
     main.style.display = 'none';
     selection.style.display = 'flex';
 }

function updateScore(value){
       score += value;

       scoreEle.innerText = score ;
}
function pickRandomChoice() {
    return choices[ Math.floor (Math.random() * choices.length)];
}

function updateSelection(selectionEle, choice) {
     
    //class reset
    selectionEle.classList.remove(' btn-paper');
    selectionEle.classList.remove(' btn-rock');
    selectionEle.classList.remove(' btn-scissors');
    //update the img
    const img = selectionEle.querySelector('img');
    selectionEle.classList.add(`btn-${choice}`);
    img.src= `./images/icon-${choice}.svg`;
    img.alt = choice;
}

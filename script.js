const buttons = document.querySelectorAll('.btn-circle');

const choices= ['paper','rock','scissors'];
 
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click',() => {
      userChoice = button.getAttribute('data-choice');

      console.log(userChoice);
    });
});

function pickRandomChoice() {
    return choices[ Math.floor (Math.random() * choices.length)];
}

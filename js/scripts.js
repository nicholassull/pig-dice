//Utility functions

function dieRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player() {
  this.totalScore = 0;
  this.roundScore = 0;
  this.turn = false;
}

//Business Logic
function fullGame() {
  let playerOne = new Player();
  let playerTwo = new Player();
  if (dieRoll() % 2 === 0) {
    playerOne.turn = true;
  } else {
    playerTwo.turn = true;
  }
  console.log(playerTwo.turn);
  console.log(playerOne.turn);
}


//Take a turn
//Test to see if the turn is over
//Test to see if game is over
//Add dice to score only if you ended your turn

//User Interface Logic
$(document).ready(function() {
  $("#play-button").click(function() {
    
  });
});
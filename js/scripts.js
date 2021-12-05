//Utility functions

function dieRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player() {
  this.totalScore = 0;
  this.turn = false;
}

//Business Logic
function gameTurn() {
  let roundScore = 0;

}

function fullGame() {
  let playerOne = new Player();
  let playerTwo = new Player();
  if (dieRoll() % 2 === 0) {
    playerOne.turn = true;
  } else {
    playerTwo.turn = true;
  }
}


//Take a turn
//Test to see if the turn is over
//Test to see if game is over
//Add dice to score only if you ended your turn

//User Interface Logic
$(document).ready(function() {
  $("#play-button").click(function() {
    let gameResult = fullGame();
    // if (gameResult === 1) {
      
    // }
    // else if (gameResult === 2) {

    // }
    let roll = 0;
    let turnScore = 0;
    while (roll !== 1) {
      roll = dieRoll();
      if (roll === 1) {
        turnScore = 0;
      }
      else if (roll !== 1) {
        turnScore += roll;
      }
    }
  });
});
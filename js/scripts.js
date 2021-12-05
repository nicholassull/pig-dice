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

let playerOne = new Player();
let playerTwo = new Player();
let roundScore = 0;

function newGame() {
  playerOne = new Player();
  playerTwo = new Player(); 
  roundScore = 0; 
}


//User Interface Logic
$(document).ready(function() {
  $("#playerOneRollDice").click(function() {
    let roll = dieRoll();
    if (roll !== 1) {
      roundScore += roll;
      $("#playerOneRollHistory").append("<li>" + roll + "</li>");
    } else {
      roundScore = 0
      $("#playerOneRollHistory").append("<li>" + roll + "</li>");
      $(".playerOneZone").toggle();
      $(".playerTwoZone").toggle();
    }
  });
  $("#playerTwoRollDice").click(function() {
    let roll = dieRoll();
    if (roll !== 1) {
      roundScore += roll;
      $("#playerTwoRollHistory").append("<li>" + roll + "</li>");
    } else {
      roundScore = 0
      $("#playerTwoRollHistory").append("<li>" + roll + "</li>");
      $(".playerOneZone").toggle();
      $(".playerTwoZone").toggle();
    }
  });
});

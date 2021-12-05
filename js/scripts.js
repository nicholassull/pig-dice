//Utility functions
function dieRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player() {
  this.totalScore = 0;
  this.turn = false;
  this.roundScore = 0;
}

//Business Logic

let playerOne = new Player();
let playerTwo = new Player();

function newGame() {
  playerOne = new Player();
  playerTwo = new Player(); 
}


//User Interface Logic
$(document).ready(function() {
  $("#playerOneRollDice").click(function() {
    let roll = dieRoll();
    if (playerOne.totalScore + playerOne.roundScore + roll >= 100) {
      alert("Player One has won!")
    } else if (roll !== 1) {
      playerOne.roundScore += roll;
      $("#playerOneRollHistory").append("<li>" + roll + "</li>");
    } else {
      playerOne.roundScore = 0;
      $("#playerOneRollHistory").append("<li>" + roll + "</li>");
      $(".playerOneZone").toggle();
      $(".playerTwoZone").toggle();
    }
  });
  $("#playerOneEndTurn").click(function() {
    playerOne.totalScore += playerOne.roundScore;
    playerOne.roundScore = 0;
    $(".playerOneZone").toggle();
    $(".playerTwoZone").toggle();
    $("#playerOneScore").empty();
    $("#playerOneScore").html(playerOne.totalScore);
  });
  $("#playerTwoRollDice").click(function() {
    let roll = dieRoll();
    if (playerTwo.totalScore + playerTwo.roundScore + roll >= 100) {
      alert("Player Two has won!")
    } else if (roll !== 1) {
      playerTwo.roundScore += roll;
      $("#playerTwoRollHistory").append("<li>" + roll + "</li>");
    } else {
      playerTwo.roundScore = 0;
      $("#playerTwoRollHistory").append("<li>" + roll + "</li>");
      $(".playerOneZone").toggle();
      $(".playerTwoZone").toggle();
    }
  });
  $("#playerTwoEndTurn").click(function() {
    playerTwo.totalScore += playerTwo.roundScore;
    playerTwo.roundScore = 0;
    $(".playerOneZone").toggle();
    $(".playerTwoZone").toggle();
    $("#playerTwoScore").empty();
    $("#playerTwoScore").html(playerTwo.totalScore);
  });
});

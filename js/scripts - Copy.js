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
    
}


//Take a turn
//Test to see if the turn is over
//Test to see if game is over
//Add dice to score only if you ended your turn

//User Interface Logic
$(document).ready(function() {

  $("#play-button").click(function() {
    fullGame();
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

// start document.ready with player instantiation
// currently, cannot access any player data with playerOne.score or fullGame.playerOne.xxx
// but if I do let phil = new Player(); I can access phil.score, etc.
// I think we need a gameTurn function that takes the player as an arg
// then sets vars as currentScore = 0; totalScore = imported as arg.totalScore

//Business Logic
function gameTurn(player) {
  let roundScore = 0;
  let totalScore = player.score;
  player.turn = true;
  while (player.turn = true) {

  }
  $('.gamePlay').click(function(event) {
    let temp = dieRoll();
    if (temp === 1) {
      roundscore = 0;
      player.turn = false;
    } else {
      roundScore += temp;
      $('.buttonReveal').toggle();
    }
    $('#buttonContinue').click(function(event) {
    //continue loop
    });
    $('#buttonStop').click(function(event) {
    //break loop
    });
  });

}
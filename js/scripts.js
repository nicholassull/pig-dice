function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function dieRoll() {
  return (getRandomInt(6) + 1);
}

function Player() {
  this.score = 0;
  this.turn = false;
}


//Take a turn
//Test to see if the turn is over
//Test to see if game is over
//Add dice to score only if you ended your turn
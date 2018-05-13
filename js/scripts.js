// Business logic

var player = "";
var opponent = "";

var diceGamble = function () {
  return Math.floor(Math.random()) + 1;
}

var rollDice = function(roll, score, total) {
  this.roll = roll;
  this.score = score;
  this.total = total;
}

rollDice.prototype.play = function () {
  if (this.roll === 1) {
    this.score = 0;
    alert ("Sorry loser, back off")
  } else {
    this.score += this.roll;
    alert ("We are on a roll")
  }
}

rollDice.prototype.hold = function () {
  this.total += this.score;
  this.score = 0;
  alert ("Quitter!!, that's right")
}

rollDice.prototype.finale = function () {
  if (this.total >= 100) {
    alert ("Hurray!!! Crusher")
  }
}

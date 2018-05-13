// Business logic

function rollDice(roll, score, total) {
  this.roll = roll;
  this.score = score;
  this.total = total;
}

var player = new rollDice(0, 0, 0);
var opponent = new rollDice(0, 0, 0);

rollDice.prototype.play = function() {
  if (this.roll === 1) {
    this.score = 0;
    alert ("Sorry, better luck next time")
  } else {
    this.score += this.roll;
    alert ("We are on a roll")
  }
}

rollDice.prototype.hold = function() {
  this.total += this.score;
  this.score = 0;
  alert ("Quitter!!, that's right")
}

rollDice.prototype.finale = function() {
  if (this.total >= 100) {
    alert ("Hurray!!! " + this.signee + " the Crusher")
  }
}

rollDice.prototype.restart = function(roll, score, total) {
  this.roll = roll;
  this.score = score;
  this.total = total;
}

rollDice.prototype.game = function(roll, score, total) {
  this.roll = roll;
  this.score = score;
  this.total = total;
}

var diceGamble = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// user interface logic

$(document).ready(function() {
  $("button#sign").click(function(event) {
    event.preventDefault();
    var firstPlayer = $("input#player").val();
    var secondPlayer = $("input#opponent").val();
    $("span#playerOutput").text(firstPlayer);
    $("span#opponentOutput").text(secondPlayer);
  });


  $("button#playerTurn").click(function(event) {
    player.roll = diceGamble();
    $("diceRoll").text(player.roll);
    player.play();
    $("#score").text(player.score);
  });


  $("button#playerPause").click(function(event) {
    player.hold();
    $("#total").text(player.total);
    $("#score").empty();
    $("#diceRoll").empty();
    player.finale();
  });


  $("button#opponentTurn").click(function(event) {
    opponent.roll = diceGamble();
    $("#diceRoll2").text(opponent.roll);
    opponent.play();
    $("#score2").text(opponent.score);
  });


  $("button#opponentPause").click(function(event) {
    opponent.hold();
    $("#total2").text(opponent.total);
    $("#score2").empty();
    $("#diceRoll2").empty();
    opponent.finale();
  });


  $("button#restart").click(function() {
    $("input#player").val("");
    $("input#opponent").val("");
    player.restart();
    opponent.restart();
    $("#diceRoll").empty();
    $("#diceRoll2").empty();
    $("#score").empty();
    $("#score2").empty();
    $("#total").empty();
    $("#total2").empty();
  });
  $("button#restart").click(function() {
    $("input#player").empty();
    $("input#opponent").empty();
    player.game();
    opponent.game();
    $("#diceRoll").empty();
    $("#diceRoll2").empty();
    $("#score").empty();
    $("#score2").empty();
    $("#total").empty();
    $("#total2").empty();
  });
});

"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var game_1 = require("./game");
var Helpers = require("./utility");
var newGame;
//add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    var player = new player_1.Player();
    player.name = Helpers.getValue('playername');
    var problemCount = Number(Helpers.getValue('problemCount'));
    var factor = Number(Helpers.getValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
//add click handler to the calculate the score button
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});

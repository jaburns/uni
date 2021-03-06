define(function(require) {
  'use strict'

  var game = require ('shared/game');

  var render = require ('client/render') (
    document.getElementById('paper').getContext('2d'),
    document.getElementById('smooth-enable')
  );

  var getInput = require ('client/input');

  gamesync.runGame (game, render, getInput);
});

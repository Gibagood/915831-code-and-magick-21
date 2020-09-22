'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var SHADOW_GAP = 10;
var TEXT_X = 120;
var TEXT_Y = 30;
var TEXT_GAP = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - TEXT_X;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(
    x, y, CLOUD_WIDTH, CLOUD_HEIGHT
  );
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
    ctx, CLOUD_X + SHADOW_GAP,
    CLOUD_Y + SHADOW_GAP,
    `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
    ctx, CLOUD_X,
    CLOUD_Y,
    `#ffffff`
  );

  ctx.fillStyle = `#000000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText (
    `Ура вы победили!`,
    TEXT_X, TEXT_Y
  );
  ctx.fillText (
    `Список результатов:`,
    TEXT_X,
    TEXT_Y + TEXT_GAP
  );

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000000`,
    ctx.fillText(
      players[i],
      CLOUD_X + TEXT_GAP + (TEXT_GAP + GAP) * i,
      CLOUD_HEIGHT - TEXT_GAP
    );
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(
      CLOUD_X + TEXT_GAP + (TEXT_GAP + GAP) * i,
      CLOUD_X,
      BAR_WIDTH,
      barHeight
    );
  }
};

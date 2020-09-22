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

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X + SHADOW_GAP,
    CLOUD_Y + SHADOW_GAP,
    `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    `#ffffff`
  );

  ctx.fillStyle = `#000000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText (
    `Ура вы победили!`,
    TEXT_X,
    TEXT_Y
  );
  ctx.fillText (
    `Список результатов:`,
    TEXT_X,
    TEXT_Y + TEXT_GAP
  );

  var maxTime = getMaxElement(times);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000000`,
    ctx.fillText(
      players[i],
      CLOUD_X + TEXT_GAP + (TEXT_GAP + GAP) * i,
      CLOUD_HEIGHT - TEXT_GAP
    );
      if (i > 0) {
        ctx.fillStyle = `hsl(240, 100%, 50%)`;
      }
      else {
        ctx.fillStyle = `rgba(255, 0, 0, 1)`;
      }
    ctx.save();
    ctx.fillRect(
      CLOUD_X + TEXT_GAP + (TEXT_GAP + GAP) * i,
      (CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime)) - TEXT_Y,
      BAR_WIDTH,
      (barHeight * times[i]) / maxTime,
    );
    ctx.restore();
  }
};

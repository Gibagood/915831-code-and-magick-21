(function stat() {
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const GAP = 50;
  const SHADOW_GAP = 10;
  const TEXT_X = 120;
  const TEXT_Y = 30;
  const TEXT_GAP = 20;
  const BAR_WIDTH = 40;
  const barHeight = CLOUD_HEIGHT - TEXT_X;

  const renderCloud = function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(
      x, y, CLOUD_WIDTH, CLOUD_HEIGHT,
    );
  };

  const getMaxElement = function getMaxElement(arr) {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function renderStatistics(ctx, players, times) {
    renderCloud(
      ctx,
      CLOUD_X + SHADOW_GAP,
      CLOUD_Y + SHADOW_GAP,
      'rgba(0, 0, 0, 0.7)',
    );
    renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#ffffff',
    );

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(
      'Ура вы победили!',
      TEXT_X,
      TEXT_Y,
    );
    ctx.fillText(
      'Список результатов:',
      TEXT_X,
      TEXT_Y + TEXT_GAP,
    );

    const maxTime = getMaxElement(times);

    const playersName = ['Вы', 'Кекс', 'Катя', 'Игорь'];

    for (let i = 0; i < playersName.length; i += 1) {
      ctx.fillStyle = '#000000';
      ctx.fillText(
        playersName[i],
        CLOUD_X + TEXT_GAP + (TEXT_GAP + GAP) * i,
        CLOUD_HEIGHT - TEXT_GAP,
      );
      playersName[i] = (i <= 0) ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = `hsl(240, ${Math.floor(Math.random() * 101)}%, 50%)`;
      ctx.save();
      ctx.fillRect(
        CLOUD_X + TEXT_GAP + (TEXT_GAP + GAP) * i,
        (CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime)) - TEXT_Y,
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime,
      );
      ctx.restore();

      ctx.fillStyle = '#000000';
      ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + TEXT_GAP + (TEXT_GAP + GAP) * i,
        (CLOUD_X + TEXT_X) - ((barHeight * times[i]) / maxTime),
      );
    }
  };
}());

// eslint-disable-next-line strict
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_MARGIN = 50;
var TEXT_HEIGT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var barHeigt = CLOUD_HEIGHT - GAP - TEXT_HEIGT;

var renderCloud = function (ctx, x, y, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x, y + 30);
  ctx.lineTo(x + 20 + GAP, y);
  ctx.lineTo(x + CLOUD_WIDTH - 30, y);
  ctx.lineTo(x + CLOUD_WIDTH, y + 30);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.fill();
  ctx.closePath();
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {


  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + TEXT_HEIGT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + TEXT_HEIGT * 2 + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_MARGIN) * i, CLOUD_HEIGHT - GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomOpacity = Math.random();
      ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity + ')';
    }

    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_MARGIN) * i, barHeigt, BAR_WIDTH, -BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_MARGIN)*i, CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGT - BAR_HEIGHT * times[i]/maxTime);
  }
};



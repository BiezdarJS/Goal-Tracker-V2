import { DoughnutChartBackgroundPluginOptions } from "@gtShared/types/doughnut-chart-background-plugin-options.type";
import { Chart, DoughnutController } from "chart.js";

export function textInCenter(chart:any, value:any) {
  var ctx = chart.ctx;
  // ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height);
	ctx.restore();

  // Draw value
  if (sessionStorage.getItem('theme') === 'theme-light') {
    ctx.fillStyle = '#333333';
  }
  if (sessionStorage.getItem('theme') === 'theme-dark') {
    ctx.fillStyle = '#fbfbfd';
  }
  ctx.font = '18px sans-serif';
  ctx.textBaseline = 'middle';

  var lineHeight = 10;

  // Define text position
  var textPosition = {
    x: Math.round(chart.width / 2 - (ctx.measureText(value).width / 2)),
    y: chart.height / 2,
  };

  ctx.fillText(value, textPosition.x, textPosition.y );
  ctx.save();
}




export function textInCenterWithLineBreak(chart:any) {
  var ctx = chart.ctx;
  // ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height);
	ctx.restore();

  // Draw value
  if (sessionStorage.getItem('theme') === 'theme-light') {
    ctx.fillStyle = '#333333';
  }
  if (sessionStorage.getItem('theme') === 'theme-dark') {
    ctx.fillStyle = '#fbfbfd';
  }
  ctx.font = '22px sans-serif';
  ctx.textBaseline = 'middle';
  ctx.textAlign = "center";

  // jak zrobić tekst w 2 liniach ?
  var lineHeight = 30;
  let value = chart.data.labels;

  // Define text position
  var textPosition = {
    x: Math.round(chart.width / 2 ),
    y: chart.height / 2 - (lineHeight / 2),
  };


  for(let i = 0;i<value.length;i++) {
    ctx.fillText(value[i], textPosition.x, textPosition.y + (i*lineHeight));
  }


  ctx.save();
}




Chart.register({
  id: 'doughnutBackground',
  beforeDatasetsDraw: (chart: Chart, args, options: DoughnutChartBackgroundPluginOptions) => {
    const { ctx, width, height } = chart

    const { innerRadius } = chart.getDatasetMeta(chart.data.datasets.length - 1).controller as DoughnutController
    const { outerRadius } = chart.getDatasetMeta(0).controller as DoughnutController
    const radiusLength = outerRadius - innerRadius

    if (options['enabled']) {
      const x = width / 2,
        y = height / 2

      ctx.beginPath()
      ctx.arc(x, y, outerRadius - radiusLength / 2, 0, 2 * Math.PI)
      ctx.lineWidth = radiusLength
      ctx.strokeStyle = options['color']
      ctx.stroke()
    }
  }
});



export const drawCirclePlugin = {
  id: 'drawCirclePlugin',
  beforeDatasetsDraw: (chart:any, args:any, options:any) => {
    var ctx = chart.ctx;
    const radius = 45;
    var x = chart.canvas.clientWidth / 2;
    var y = chart.canvas.clientHeight / 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 43.875, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = options.backgroundColor || '#ddd';
    ctx.stroke();
  }
}

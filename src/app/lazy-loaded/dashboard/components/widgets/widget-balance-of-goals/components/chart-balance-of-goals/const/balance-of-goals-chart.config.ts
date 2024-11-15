import { textInCenterWithLineBreak } from "@gtShared/utils/chart-utils";
import { ChartConfiguration } from "chart.js";

export const BalanceOfGoalsChartConfig: ChartConfiguration<'doughnut'>['options'] = {
  cutout: '90%',
  elements: {
    arc: {
      borderWidth: 0,
      borderJoinStyle: "round",
      borderRadius: 25
    },
  },
  animation: {
    animateRotate: true,
    onComplete: function() {
      textInCenterWithLineBreak(this)
    }
  },
  events: [],
  plugins: {
    legend: {
      display: false
    }
  },
};

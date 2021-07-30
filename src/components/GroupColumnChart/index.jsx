import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
const generateDataOption = (infoCovidHistory, t) => {
  if (
    infoCovidHistory.cases &&
    infoCovidHistory.deaths &&
    infoCovidHistory.recovered
  ) {
    const listCases = Object.values(infoCovidHistory.cases);
    const listRecovered = Object.values(infoCovidHistory.recovered);
    const listDate = Object.keys(infoCovidHistory.cases);
    const listDateFormated = listDate.map((item) =>
      moment(item).format('DD/MM/YYYY')
    );

    const categories = [...listDateFormated];
    return {
      chart: {
        type: 'column',
      },

      title: {
        text: `${t('group-column-chart_title')}`,
      },

      xAxis: {
        categories: categories,
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: `${t('cases')}`,
        },
      },

      tooltip: {
        formatter: function () {
          return (
            '<b>' +
            this.x +
            '</b><br/>' +
            this.series.name +
            ': ' +
            this.y +
            '<br/>' +
            'Total: ' +
            this.point.stackTotal
          );
        },
      },
      colors: ['#FF4757', '#70A1FF'],
      plotOptions: {
        column: {
          stacking: 'normal',
        },
        series: {
          events: {
            legendItemClick: function (bla) {
              if (this.visible) {
                var count = 0;
                for (var index in this.chart.series) {
                  if (this.chart.series[index].visible) {
                    count = count + 1;
                    if (count > 1) break;
                  }
                }
                if (count === 1) return false;
              }
            },
          },
        },
      },

      series: [
        {
          name: `${t('cases')}`,
          data: [...listCases],
        },
        {
          name: `${t('deaths')}`,
          data: [...listRecovered],
        },
      ],
    };
  }
};
function GroupColumnChart(props) {
  const { infoCovidHistory } = props;
  const { t } = useTranslation();
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={generateDataOption(infoCovidHistory, t)}
      />
    </div>
  );
}

export default React.memo(GroupColumnChart);

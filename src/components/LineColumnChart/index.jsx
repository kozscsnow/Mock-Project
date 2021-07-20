import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
const generateDataOption = (infoCovidHistory, t) => {
  if (
    infoCovidHistory.cases &&
    infoCovidHistory.deaths &&
    infoCovidHistory.recovered
  ) {
    const listCases = Object.values(infoCovidHistory.cases);
    const listDeaths = Object.values(infoCovidHistory.deaths);
    const listRecovered = Object.values(infoCovidHistory.recovered);
    const listDate = Object.keys(infoCovidHistory.cases);
    const listDateFormated = listDate.map((item) =>
      moment(item).format('DD/MM/YYYY')
    );

    const categories = [...listDateFormated];
    return {
      chart: {
        zoomType: 'xy',
      },
      title: {
        text: `${t('line-column-chart_title')}`,
      },
      subtitle: {
        text: `${t('line-column-chart_sub-title')}`,
      },
      xAxis: [
        {
          categories: categories,
          crosshair: true,
        },
      ],
      yAxis: [
        {
          // Primary yAxis
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
          title: {
            text: `${t('cases')}`,
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
        },
        {
          // Secondary yAxis
          title: {
            text: `${t('recovered')}`,
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          'rgba(255,255,255,0.25)',
      },
      series: [
        {
          name: `${t('recovered')}`,
          type: 'column',
          yAxis: 1,
          data: [...listCases],
          tooltip: {
            valueSuffix: '',
          },
        },
        {
          name: `${t('cases')}`,
          type: 'spline',
          data: [...listRecovered],
          tooltip: {
            valueSuffix: '',
          },
        },
      ],
    };
  }
};
function LineColumnChart(props) {
  const { t } = useTranslation();
  const { infoCovidHistory } = props;
  console.log(infoCovidHistory);
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={generateDataOption(infoCovidHistory, t)}
      />
    </div>
  );
}

export default LineColumnChart;

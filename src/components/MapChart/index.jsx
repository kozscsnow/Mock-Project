import React, { useEffect, useState } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import highchartsMap from 'highcharts/modules/map';
import Chart from 'react-google-charts';

// highchartsMap(Highcharts);
// const generateOptions = () => {
//   return {
//     chart: {
//       map: 'custom/world',
//       borderWidth: 1,
//     },

//     colors: [
//       'rgba(19,64,117,0.05)',
//       'rgba(19,64,117,0.2)',
//       'rgba(19,64,117,0.4)',
//       'rgba(19,64,117,0.5)',
//       'rgba(19,64,117,0.6)',
//       'rgba(19,64,117,0.8)',
//       'rgba(19,64,117,1)',
//     ],

//     title: {
//       text: 'Population density by country (/km²)',
//     },

//     mapNavigation: {
//       enabled: true,
//     },

//     legend: {
//       title: {
//         text: 'Individuals per km²',
//         style: {
//           color:
//             // theme
//             (Highcharts.defaultOptions &&
//               Highcharts.defaultOptions.legend &&
//               Highcharts.defaultOptions.legend.title &&
//               Highcharts.defaultOptions.legend.title.style &&
//               Highcharts.defaultOptions.legend.title.style.color) ||
//             'black',
//         },
//       },
//       align: 'left',
//       verticalAlign: 'bottom',
//       floating: true,
//       layout: 'vertical',
//       valueDecimals: 0,
//       backgroundColor:
//         // theme
//         (Highcharts.defaultOptions &&
//           Highcharts.defaultOptions.legend &&
//           Highcharts.defaultOptions.legend.backgroundColor) ||
//         'rgba(255, 255, 255, 0.85)',
//       symbolRadius: 0,
//       symbolHeight: 14,
//     },

//     colorAxis: {
//       dataClasses: [
//         {
//           to: 3,
//         },
//         {
//           from: 3,
//           to: 10,
//         },
//         {
//           from: 10,
//           to: 30,
//         },
//         {
//           from: 30,
//           to: 100,
//         },
//         {
//           from: 100,
//           to: 300,
//         },
//         {
//           from: 300,
//           to: 1000,
//         },
//         {
//           from: 1000,
//         },
//       ],
//     },

//     series: [
//       {
//         data: 'data',
//         joinBy: ['iso-a3', 'code'],
//         animation: true,
//         name: 'Population density',
//         states: {
//           hover: {
//             color: '#a4edba',
//           },
//         },
//         tooltip: {
//           valueSuffix: '/km²',
//         },
//         shadow: false,
//       },
//     ],
//   };
// };

const options = {
  colors: 'red',
  tooltip: { textStyle: { color: 'blue' } },
  // displayMode: 'markers',
  // region: 'IT',
  // colorAxis: { colors: ['green', 'blue'] },
  // backgroundColor: '#d4f1f9',
  // legend: 'hello',
  animation: {
    startup: true,
    easing: 'linear',
    duration: 1500,
  },
  // is3D: true,
};
function MapChart(props) {
  const { listInfoCovidCountries } = props;
  const [DataCovidAll, setDataCovidAll] = useState([]);
  useEffect(() => {
    const dataCovid = listInfoCovidCountries.map((infoCountry) => {
      return [infoCountry.country, infoCountry.cases, infoCountry.recovered];
    });

    setDataCovidAll(dataCovid);
  }, [listInfoCovidCountries]);

  return (
    <div>
      {/* <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={generateOptions()}
          constructorType={'mapChart'}
        />
      </div> */}
      <Chart
        width={'100%'}
        height={'600px'}
        chartType="GeoChart"
        loader={<div>Loading Chart</div>}
        data={[['Country', 'Total Cases', 'Recovered'], ...DataCovidAll]}
        options={options}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default MapChart;

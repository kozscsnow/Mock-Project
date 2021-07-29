import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useTranslation } from 'react-i18next';


const options = {
  colors: 'red',
  tooltip: { textStyle: { color: '#000' } },
  animation: {
    startup: true,
    easing: 'linear',
    duration: 1500,
  },
};
function MapChart(props) {
  const { t } = useTranslation();
  const { listInfoCovidCountries } = props;
  const [DataCovidAll, setDataCovidAll] = useState([]);
  useEffect(() => {
    if (listInfoCovidCountries) {
      const dataCovid = listInfoCovidCountries.map((infoCountry) => {
        return [infoCountry.country, infoCountry.cases, infoCountry.recovered];
      });
      setDataCovidAll(dataCovid);
    }
  }, [listInfoCovidCountries]);

  return (
    <div>
      <Chart
        width={'100%'}
        height={'600px'}
        chartType="GeoChart"
        loader={<div>Loading Chart</div>}
        data={[
          [`${t('country')}`, `${t('total_cases')}`, `${t('total_recovered')}`],
          ...DataCovidAll,
        ]}
        options={options}
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default React.memo(MapChart);

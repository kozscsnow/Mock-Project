import React, { useEffect, useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import ColumnChart from 'components/ColumnChart';
import covidHistoryDateAPI from 'apis/covidHistoryDateAPI';
import { useParams } from 'react-router';

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function DetailColumnChart(props) {
  const { countryName } = useParams();

  const [date, setDate] = useState('100');
  const [infoCovidCountryFromDay, setInfoCovidCountryFromDay] = useState('');

  const fetchInfoCovidCountriesFromDay = async () => {
    let params = {
      lastdays: date,
    };
    const infoCovidCountryFromDay = await covidHistoryDateAPI.get(
      countryName,
      params
    );
    setInfoCovidCountryFromDay(infoCovidCountryFromDay.timeline);
  };

  useEffect(() => {
    fetchInfoCovidCountriesFromDay();
  }, []);

  const handleFilterDayChange = (event, value) => {
    setDate(value);
  };
  return (
    <div>
      <Typography gutterBottom>Filter Day</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        onChangeCommitted={handleFilterDayChange}
      />

      <ColumnChart infoCovidHistory={infoCovidCountryFromDay} type={'cases'} />
      <ColumnChart
        infoCovidHistory={infoCovidCountryFromDay}
        type={'recovered'}
      />
      <ColumnChart infoCovidHistory={infoCovidCountryFromDay} type={'deaths'} />
    </div>
  );
}

export default DetailColumnChart;

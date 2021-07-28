import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import covidHistoryDateAPI from 'apis/covidHistoryDateAPI';
import ColumnChart from 'components/ColumnChart';
import InfoCovidBox from 'components/InfoCovidBox';
import PieChart from 'components/PieChart';
import WrapperDashboard from 'HOCs/WrapperDashboard';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import CovidOverViewBox from './components/CovidOverViewBox';
import styled from 'styled-components';

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

const StyleTypography = styled(Typography)`
  color: ${(props) => props.theme.textColor};
`;
function DetailInfoCovidCountry(props) {
  // const [cases, setCases] = useState(0);
  // const [deaths, setDeaths] = useState(0);
  // const [recovered, setRecovered] = useState(0);
  const [infoCovidCountry, setInfoCovidCountry] = useState('');
  const [infoCovidCountryFromDay, setInfoCovidCountryFromDay] = useState('');
  const { countryName } = useParams();
  const [date, setDate] = useState('100');
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  const dispatch = useDispatch();

  const handleFilterDayChange = (event, value) => {
    setDate(value);
  };
  // let listCases = [];
  // let listDeaths = [];
  // let listRecovered = [];
  // let listDate = [];
  // let listDateFormated = [];
  const fetchInfoCovidCountries = async () => {
    const infoCovidCountry = await covidCountriesAPI.get(countryName);
    setInfoCovidCountry(infoCovidCountry);
  };
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
    fetchInfoCovidCountries();
    fetchInfoCovidCountriesFromDay();
  }, [dispatch, countryName, date]);

  const {
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    countryInfo,
    active,
    tests,
    undefined,
  } = infoCovidCountry;
  return (
    <div>
      <CovidOverViewBox
        active={active}
        tests={tests}
        undefined={undefined}
        country={country}
        cases={cases}
        deaths={deaths}
        recovered={recovered}
        todayCases={todayCases}
        todayDeaths={todayDeaths}
        todayRecovered={todayRecovered}
        countryInfo={countryInfo}
      />
      <InfoCovidBox cases={cases} deaths={deaths} recovered={recovered} />
      <PieChart
        cases={cases}
        deaths={deaths}
        recovered={recovered}
        type={`${countryName}`}
      />
      <br />
      <StyleTypography gutterBottom>Filter Day</StyleTypography>
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

export default WrapperDashboard(DetailInfoCovidCountry);

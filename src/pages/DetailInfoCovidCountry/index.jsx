import { Skeleton } from 'antd';
import covidHistoryDateAPI from 'apis/covidHistoryDateAPI';
import ColumnChart from 'components/ColumnChart';
import InfoCovidBox from 'components/InfoCovidBox';
import LocalLoading from 'components/LocalLoading';
import PieChart from 'components/PieChart';
import WrapperDashboard from 'HOCs/WrapperDashboard';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import { GlobalActions } from '../../redux/rootAction';
import CovidOverViewBox from './components/CovidOverViewBox';
import TableInfoCovidDetail from './components/TableInfoCovidDetail';
import TableInfoCovid from './components/TableInfoCovidDetail';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import _ from 'lodash';

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

  // if (infoCovidCountryFromDay) {
  //   listCases = Object.values(infoCovidCountryFromDay.cases);
  //   listDeaths = Object.values(infoCovidCountryFromDay.deaths);
  //   listRecovered = Object.values(infoCovidCountryFromDay.recovered);
  //   listDate = Object.keys(infoCovidCountryFromDay.cases);
  //   listDateFormated = listDate.map((item) =>
  //     moment(item).format('DD/MM/YYYY')
  //   );
  // }
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
      {/* {isLocalLoading ? (
        <Skeleton />
      ) : (
        <InfoCovidBox infoCovidAll={infoCovidCountry} />
      )} */}
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
      {/* <TableInfoCovidDetail
        listCases={listCases}
        listDeaths={listDeaths}
        listRecovered={listRecovered}
        listDateFormated={listDateFormated}
      /> */}
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

export default WrapperDashboard(DetailInfoCovidCountry);

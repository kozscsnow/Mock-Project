import covidHistoryDateAPI from 'apis/covidHistoryDateAPI';
import ColumnChart from 'components/ColumnChart';
import InfoCovidBox from 'components/InfoCovidBox';
import PieChart from 'components/PieChart';
import WrapperDashboard from 'HOCs/WrapperDashboard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import CovidOverViewBox from './components/CovidOverViewBox';
import FilterDayBox from './components/FilterDayBox';
import './DetailInfoCovidCountry.scss';
import { Anchor } from 'antd';
const { Link } = Anchor;

function DetailInfoCovidCountry(props) {
  const [infoCovidCountry, setInfoCovidCountry] = useState('');
  const [infoCovidCountryFromDay, setInfoCovidCountryFromDay] = useState('');
  const { countryName } = useParams();
  const [date, setDate] = useState('100');
  const [isLocalLoading, setIsLocalLoading] = useState(true);

  const handleFilterDayChange = (date) => {
    setDate(date);
  };
  // fetch data covid countries
  const fetchInfoCovidCountries = async () => {
    const infoCovidCountry = await covidCountriesAPI.get(countryName);
    setInfoCovidCountry(infoCovidCountry);
  };
  useEffect(() => {
    fetchInfoCovidCountries();
  }, [countryName]);
  // fetch data covid by day
  const fetchInfoCovidCountriesFromDay = async () => {
    setIsLocalLoading(true);
    let params = {
      lastdays: date,
    };
    const infoCovidCountryFromDay = await covidHistoryDateAPI.get(
      countryName,
      params
    );
    setInfoCovidCountryFromDay(infoCovidCountryFromDay.timeline);
    setIsLocalLoading(false);
  };
  useEffect(() => {
    fetchInfoCovidCountriesFromDay();
  }, [date, countryName]);
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
    <div className="detail-info-covid-country__container">
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
        isLocalLoading={isLocalLoading}
      />
      <InfoCovidBox cases={cases} deaths={deaths} recovered={recovered} />
      <PieChart
        cases={cases}
        deaths={deaths}
        recovered={recovered}
        type={`${countryName}`}
      />
      <br />
      <FilterDayBox
        onFilterDayChange={handleFilterDayChange}
        setDate={setDate}
      />
      <ColumnChart
        infoCovidHistory={infoCovidCountryFromDay}
        type={'cases'}
        isLocalLoading={isLocalLoading}
      />
      <ColumnChart
        infoCovidHistory={infoCovidCountryFromDay}
        type={'recovered'}
        isLocalLoading={isLocalLoading}
      />
      <ColumnChart
        infoCovidHistory={infoCovidCountryFromDay}
        type={'deaths'}
        isLocalLoading={isLocalLoading}
      />
    </div>
  );
}

export default WrapperDashboard(DetailInfoCovidCountry);

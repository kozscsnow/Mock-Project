import { Skeleton } from 'antd';
import InfoCovidBox from 'components/InfoCovidBox';
import LocalLoading from 'components/LocalLoading';
import PieChart from 'components/PieChart';
import WrapperDashboard from 'HOCs/WrapperDashboard';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import { GlobalActions } from '../../redux/rootAction';
import CovidOverViewBox from './CovidOverViewBox';

function DetailInfoCovidCountry(props) {
  // const [cases, setCases] = useState(0);
  // const [deaths, setDeaths] = useState(0);
  // const [recovered, setRecovered] = useState(0);
  const [infoCovidCountry, setInfoCovidCountry] = useState('');
  const { countryName } = useParams();
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchInfoCovidCountries = async () => {
      const infoCovidCountry = await covidCountriesAPI.get(countryName);
      setInfoCovidCountry(infoCovidCountry);

      // setIsLocalLoading(false);
      // dispatch(GlobalActions.setIsLoading(false));
    };
    fetchInfoCovidCountries();
  }, [dispatch, countryName]);

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
    </div>
  );
}

export default WrapperDashboard(DetailInfoCovidCountry);

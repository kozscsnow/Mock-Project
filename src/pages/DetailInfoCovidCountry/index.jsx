import { Skeleton } from 'antd';
import InfoCovidBox from 'components/InfoCovidBox';
import LocalLoading from 'components/LocalLoading';
import PieChart from 'components/PieChart';
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
  }, [dispatch]);

  const {
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    countryInfo,
  } = infoCovidCountry;
  return (
    <div>
      {/* {isLocalLoading ? (
        <Skeleton />
      ) : (
        <InfoCovidBox infoCovidAll={infoCovidCountry} />
      )} */}
      <InfoCovidBox cases={cases} deaths={deaths} recovered={recovered} />
      <PieChart
        cases={cases}
        deaths={deaths}
        recovered={recovered}
        type={`${countryName}`}
      />
      <CovidOverViewBox
        country={country}
        cases={cases}
        deaths={deaths}
        recovered={recovered}
        todayCases={todayCases}
        todayDeaths={todayDeaths}
        todayRecovered={todayRecovered}
        countryInfo={countryInfo}
      />
    </div>
  );
}

export default DetailInfoCovidCountry;

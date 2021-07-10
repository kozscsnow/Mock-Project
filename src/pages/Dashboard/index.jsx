import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import { GlobalActions } from '../../redux/rootAction';
import Chart from './components/Chart';
import CountriesSelectorInput from './components/CountriesSelectorInput';
import InfoCovid from './components/InfoCovid';

function Dashboard(props) {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));

    const fetchInfoCovidCountries = async () => {
      const listInfoCovidCountries = await covidCountriesAPI.getAll();
      console.log({ listInfoCovidCountries });
      setCountries(listInfoCovidCountries);
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetchInfoCovidCountries();
  }, [dispatch]);
  return (
    <div className="container">
      <CountriesSelectorInput countries={countries} />
      <InfoCovid />
      <Chart />
    </div>
  );
}

export default Dashboard;

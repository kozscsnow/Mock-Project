import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import { GlobalActions } from '../../redux/rootAction';
import Chart from './components/Chart';
import CountriesSelectorInput from './components/CountriesSelectorInput';
import InfoCovid from './components/InfoCovid';

function Dashboard(props) {
  const dispatch = useDispatch();
  const [listInfoCovidCountries, setListInfoCovidCountries] = useState([]);
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));

    const fetchInfoCovidCountries = async () => {
      const listInfoCovidCountries = await covidCountriesAPI.getAll();
      console.log({ listInfoCovidCountries });
      setListInfoCovidCountries(listInfoCovidCountries);
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetchInfoCovidCountries();
  }, [dispatch]);
  return (
    <div className="container">
      <CountriesSelectorInput listInfoCovidCountries={listInfoCovidCountries} />
      <InfoCovid />
      <Chart listInfoCovidCountries={listInfoCovidCountries} />
    </div>
  );
}

export default Dashboard;

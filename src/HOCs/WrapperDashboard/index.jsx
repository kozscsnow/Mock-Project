import covidCountriesAPI from 'apis/covidCoutriesAPI';
import ScrollToTopButton from 'components/ScrollToTopButton';
import FooterDashboard from 'pages/Dashboard/components/FooterDashboard';
import HeaderDashboard from 'pages/Dashboard/components/HeaderDashBoard';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CovidInfoActions } from 'redux/rootAction';
import './WrapperDashboard.scss';

function WrapperDashboard(WrappedDashboard) {
  return function NewDashboard(props) {
    const [listInfoCovidCountries, setListInfoCovidCountries] = useState([]);
    const [isLocalLoading, setIsLocalLoading] = useState(true);

    const dispatch = useDispatch();

    // Fetch Covid  Countries
    const fetchInfoCovidCountries = async () => {
      const listInfoCovidCountries = await covidCountriesAPI.getAll();
      setListInfoCovidCountries(listInfoCovidCountries);
      dispatch(
        CovidInfoActions.getListInfoCovidCountries(listInfoCovidCountries)
      );
      setIsLocalLoading(false);
    };
    useEffect(() => {
      setIsLocalLoading(true);
      fetchInfoCovidCountries();
    }, [dispatch]);
    return (
      <div className="dashboard__container container">
        <HeaderDashboard listInfoCovidCountries={listInfoCovidCountries} />
        <WrappedDashboard
          listInfoCovidCountries={listInfoCovidCountries}
          isLocalLoading={isLocalLoading}
          {...props}
        />
        <FooterDashboard />
        <ScrollToTopButton />
      </div>
    );
  };
}

export default WrapperDashboard;

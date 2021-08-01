import { message } from 'antd';
import covidAllAPI from 'apis/covidAllAPI';
import WrapperPage from 'HOCs/WrapperPage';
import IntroHome from 'pages/Home/component/IntroHome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MainContent from './component/MainContent';
import NewsHome from './component/NewsHome';
import './Home.scss';

function HomePage(props) {
  const dispatch = useDispatch();
  const [infoCovidAll, setInfoCovidAll] = useState({});
  const [isLocalLoading, setIsLocalLoading] = useState(true);

  // Fetch Covid All
  const fetchCovidAll = async () => {
    try {
      const InfoCovidAll = await covidAllAPI.getAll();
      setInfoCovidAll(InfoCovidAll);
      setIsLocalLoading(false);
    } catch (error) {
      message.warning(
        'Something wrong !!! Please try again or check your connection'
      );
    }
  };
  useEffect(() => {
    setIsLocalLoading(true);
    fetchCovidAll();
  }, [dispatch]);
  return (
    <div className="home-body container">
      <IntroHome infoCovidAll={infoCovidAll} isLocalLoading={isLocalLoading} />
      <MainContent />
      <NewsHome />
    </div>
  );
}

export default WrapperPage(HomePage);

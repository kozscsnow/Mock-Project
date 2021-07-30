import covidAllAPI from 'apis/covidAllAPI';
import WrapperPage from 'HOCs/WrapperPage';
import IntroHome from 'pages/Home/component/IntroHome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import MainContent from './component/MainContent';
import NewsHome from './component/NewsHome';
import './Home.scss';
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  transition: 0.3s ease;
`;

function HomePage(props) {
  const dispatch = useDispatch();
  const [infoCovidAll, setInfoCovidAll] = useState({});

  // Fetch Covid All
  const fetchCovidAll = async () => {
    try {
      const InfoCovidAll = await covidAllAPI.getAll();
      setInfoCovidAll(InfoCovidAll);
    } catch (error) {
      alert(`
    Something wrong !!!
    Please try again or check your connection
    `);
    }
  };
  useEffect(() => {
    fetchCovidAll();
  }, [dispatch]);
  return (
    <Wrapper className="home-body container">
      <IntroHome infoCovidAll={infoCovidAll} />
      <MainContent />
      <NewsHome />
    </Wrapper>
  );
}

export default WrapperPage(HomePage);

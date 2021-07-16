import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';
import { Link } from 'react-router-dom';
import HeaderNews from './components/HeaderNews';
import newsAPI from '../../apis/newsAPI';
import IntroCarousel from './components/IntroCarousel';
import MainContent from './components/MainContentNews';
import ContentCarousel from './components/ContentCarousel';
import Navigation from './components/Navigation';
import MultimediaNews from './components/MultimediaNews';

function News(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const fetchNewsData = async () => {
      const listNewsData = await newsAPI.getAll();
      dispatch(GlobalActions.setIsLoading(false));
      console.log(listNewsData);
    };
    fetchNewsData();
  }, [dispatch]);

  //Fake Loading
  // useEffect(() => {
  //   dispatch(GlobalActions.setIsLoading(true));
  //   const loadingFake = setTimeout(() => {
  //     dispatch(GlobalActions.setIsLoading(false));
  //   }, 500);
  //   return () => {
  //     clearTimeout(loadingFake);
  //   };
  // });
  return (
    <div className="container">
      <HeaderNews />
      <Navigation />
      <IntroCarousel />
      <MainContent />
      <MultimediaNews />
      <ContentCarousel />
    </div>
  );
}

export default News;

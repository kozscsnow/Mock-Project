import React from 'react';
import Article from './components/Article';
import ContentCarousel from './components/ContentCarousel';
import HeaderNews from './components/HeaderNews';
import IntroCarousel from './components/IntroCarousel';
import MainContent from './components/MainContentNews';
import MultimediaNews from './components/MultimediaNews';
import './News.scss';

function News(props) {
  return (
    <div className="container">
      <HeaderNews />
      <div className="news__body">
        <IntroCarousel />
        <MainContent />
        <MultimediaNews />
        <ContentCarousel />
        <Article />
      </div>
    </div>
  );
}

export default News;

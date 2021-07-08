import React from 'react';
import { Carousel } from 'antd';
import styles from './IntroCarousel.module.css';

function CarouselComponent(props) {
  const contentStyle = {
    height: '200px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className={styles.introCarouselContainer}>
      <Carousel autoplay effect="fade" dotPosition="top">
        <div>
          <h3 style={contentStyle}>1</h3>
          <p>hello</p>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
          <p>hello</p>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
          <p>hello</p>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
          <p>hello</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;

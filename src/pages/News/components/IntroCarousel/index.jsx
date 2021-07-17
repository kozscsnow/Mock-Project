import React from 'react';
import { Carousel } from 'antd';
import styles from './IntroCarousel.module.css';

function CarouselComponent(props) {
  const contentStyle = {
    height: '200px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    background:
      'url(https://znews-photo.zadn.vn/w960/Uploaded/aobohun/2021_07_17/0T9A2882.jpg) no-repeat center ',
    // backgroundRepeat: 'no-repeat',
  };
  const imageStyle = {
    width: '100%',
  };
  return (
    <div className={styles.introCarouselContainer}>
      <Carousel autoplay effect="fade" dotPosition="top">
        <div>
          <h3 style={contentStyle}>
            {/* <img
              style={imageStyle}
              src="https://znews-photo.zadn.vn/w360/Uploaded/kbfoplb/2021_07_16/DSC_3571.jpg"
            ></img> */}
          </h3>
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

import { Carousel } from 'antd';
import React from 'react';
import styles from './IntroCarousel.module.css';

function CarouselComponent(props) {
  const makeStyles = (background) => {
    return {
      height: '200px',
      width: '100%',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: `url(${background}) no-repeat center `,
    };
  };

  return (
    <div className={styles.introCarouselContainer}>
      <Carousel autoplay effect="fade" dotPosition="top">
        <div>
          <div
            style={makeStyles(
              'https://cdn4.vectorstock.com/i/1000x1000/00/63/carousel-with-white-horse-on-white-background-vector-27160063.jpg'
            )}
          ></div>
        </div>
        <div>
          <div
            style={makeStyles(
              'https://www.pngkit.com/png/detail/224-2247601_amusement-park-carousel-png-background-image-.png'
            )}
          ></div>
        </div>
        <div>
          <div
            style={makeStyles(
              'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80'
            )}
          ></div>
        </div>
        <div>
          <div
            style={makeStyles(
              'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg'
            )}
          ></div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;

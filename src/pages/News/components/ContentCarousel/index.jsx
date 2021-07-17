import { Carousel } from 'antd';
import React from 'react';
import './ContentCarousel.scss';

function ContentCarousel(props) {
  const makeStyle = (backgroundUrl) => {
    return {
      height: '200px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: `url(${backgroundUrl}) no-repeat center`,
    };
  };

  return (
    <div className="content-carousel__container">
      <h2 className="content-carousel__header">BOOK</h2>
      <Carousel autoplay effect="fade" dot={false}>
        <div>
          <h3
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/oplukaa/2021_07_17/thumb.jpg'
            )}
          ></h3>
          <p className="content-carousel__content">
            Những cuốn sách giúp bạn hiểu về nghệ thuật
          </p>
        </div>
        <div>
          <h3
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/qoswae/2021_07_17/nightwatchdisplay.jpg'
            )}
          ></h3>
          <p className="content-carousel__content">
            Khôi phục bức tranh nổi tiếng bằng AI
          </p>
        </div>
        <div>
          <h3
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/oplukaa/2021_07_16/thumb_Carroll.jpg'
            )}
          ></h3>
          <p className="content-carousel__content">
            Tuổi thơ của Lewis Carroll
          </p>
        </div>
        <div>
          <h3
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/yfrsy/2021_07_16/chan_troi.jpg'
            )}
          ></h3>
          <p className="content-carousel__content">
            Tuổi trẻ nào đã khuất chân mây
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default ContentCarousel;

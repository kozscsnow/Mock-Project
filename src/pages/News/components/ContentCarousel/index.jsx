import { Carousel } from 'antd';
import React from 'react';
import './ContentCarousel.scss';
import styled from 'styled-components';

const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const StyleTitle = styled.h2`
  color: ${(props) => props.theme.textColor};
`;

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
      <StyleTitle className="content-carousel__header">BOOK</StyleTitle>
      <Carousel autoplay effect="fade" dotPosition="top">
        <div>
          <div
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/oplukaa/2021_07_17/thumb.jpg'
            )}
          ></div>
          <StyleText className="content-carousel__content">
            Những cuốn sách giúp bạn hiểu về nghệ thuật
          </StyleText>
        </div>
        <div>
          <div
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/qoswae/2021_07_17/nightwatchdisplay.jpg'
            )}
          ></div>
          <StyleText className="content-carousel__content">
            Khôi phục bức tranh nổi tiếng bằng AI
          </StyleText>
        </div>
        <div>
          <div
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/oplukaa/2021_07_16/thumb_Carroll.jpg'
            )}
          ></div>
          <StyleText className="content-carousel__content">
            Tuổi thơ của Lewis Carroll
          </StyleText>
        </div>
        <div>
          <div
            className="content-carousel__title"
            style={makeStyle(
              'https://znews-photo.zadn.vn/w360/Uploaded/yfrsy/2021_07_16/chan_troi.jpg'
            )}
          ></div>
          <StyleText className="content-carousel__content">
            Tuổi trẻ nào đã khuất chân mây
          </StyleText>
        </div>
      </Carousel>
    </div>
  );
}

export default ContentCarousel;

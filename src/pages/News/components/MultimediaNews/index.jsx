import { Col, Row } from 'antd';
import React from 'react';
import './MultimediaNews.scss';
import { FileImageOutlined } from '@ant-design/icons';
function MultimediaNews(props) {
  return (
    <div className="main-multimedia__container">
      <div className="main-multimedia__header">
        <h2 className="main-multimedia__header-title">MULTIMEDIA</h2>
        <div className="mobileHidden">
          <ul className="main-multimedia__header-nav">
            <li className="main-multimedia__header-item">
              <a href=" #">VIDEO</a>{' '}
            </li>
            <li className="main-multimedia__header-item">
              <a href=" #">LONGFORM</a>{' '}
            </li>
            <li className="main-multimedia__header-item">
              <a href=" #">VOICES</a>{' '}
            </li>
            <li className="main-multimedia__header-item">
              <a href=" #">STORY</a>{' '}
            </li>
            <li className="main-multimedia__header-item">
              <a href=" #">QUIZ</a>{' '}
            </li>
          </ul>
        </div>
      </div>
      <Row gutter={[16, 16]} className="main-multimedia__article">
        <Col xs={24} lg={12} className="main-multimedia__article-list">
          <img
            src="https://znews-photo.zadn.vn/w860/Uploaded/kbfoplb/2021_07_17/thumb_2.jpg"
            alt=""
            className="main-multimedia__article-thumbnail"
          />
          <h3 className="main-multimedia__article-title">
            <FileImageOutlined /> Bên trong Bệnh viện Hồi sức Covid-19 lớn nhất
            Việt Nam
          </h3>
          <p className="main-multimedia__article-summary">
            Bệnh viện Hồi sức Covid-19 với quy mô 1.000 giường là đơn vị tuyến
            cuối điều trị Covid-19 tại TP.HCM, có nhiệm vụ tiếp nhận những bệnh
            nhân rất nặng và nguy kịch.
          </p>
        </Col>
        <Col xs={12} lg={6} className="main-multimedia__article-list">
          <div className="main-multimedia__article-item">
            <img
              src="https://znews-photo.zadn.vn/w360/Uploaded/kbfoplb/2021_07_16/thumb.jpg"
              alt=""
              className="main-multimedia__article-thumbnail"
            />
            <h3 className="main-multimedia__article-title main-multimedia__article-title main-multimedia__article-title--small">
              <FileImageOutlined /> Đêm trực căng thẳng tại bệnh viện dã chiến ở
              TP.HCM
            </h3>
          </div>
          <div className="main-multimedia__article-item">
            <img
              src="https://znews-photo.zadn.vn/w360/Uploaded/abhuuwo/2021_07_17/can_so.jpg"
              alt=""
              className="main-multimedia__article-thumbnail"
            />
            <h3 className="main-multimedia__article-title main-multimedia__article-title--small">
              <FileImageOutlined /> Ưu và nhược điểm của các loại cần số tự động
            </h3>
          </div>
        </Col>
        <Col xs={12} lg={6} className="main-multimedia__article-list">
          <div className="main-multimedia__article-item">
            <img
              src="https://znews-photo.zadn.vn/w360/Uploaded/natmzz/2021_07_17/01z_pedri_asensio_a.jpg"
              alt=""
              className="main-multimedia__article-thumbnail"
            />
            <h3 className="main-multimedia__article-title main-multimedia__article-title--small">
              <FileImageOutlined /> Đội hình ngôi sao tham dự Olympic Tokyo
            </h3>
          </div>
          <div className="main-multimedia__article-item">
            <img
              src="https://znews-photo.zadn.vn/w360/Uploaded/kbd_bcvi/2021_07_17/z2619123358224_44c4747ffb5cec15b6ce44254c2b4121_1.jpg"
              alt=""
              className="main-multimedia__article-thumbnail"
            />
            <h3 className="main-multimedia__article-title main-multimedia__article-title--small">
              <FileImageOutlined /> Khỉ Vũng Tàu và loạt ảnh động vật tràn ra
              phố mùa Covid-19
            </h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MultimediaNews;

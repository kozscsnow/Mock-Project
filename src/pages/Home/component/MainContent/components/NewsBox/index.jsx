import { Col, Row } from 'antd';
import React from 'react';
import './NewsBox.scss';
function NewsBox(props) {
  const { title, author, urlToImage, content, url } = props;
  return (
    <div className="border-box news-box">
      <Row className="" justify="center">
        <Col xs={18} md={6} className="main-content__thumbnail-news">
          <a href={url} target="_blank">
            <img
              src={urlToImage}
              alt="thumbnail"
              className="main-content__thumbnail-item"
            />
          </a>
        </Col>
        <Col xs={18} md={18} className="main-content__content">
          <a href={url} target="_blank">
            <h5 className="main-content__content-header">{title}</h5>
          </a>
          <p className="main-content__content-text">{content}</p>
          <small>{author}</small>
        </Col>
      </Row>
    </div>
  );
}

export default NewsBox;

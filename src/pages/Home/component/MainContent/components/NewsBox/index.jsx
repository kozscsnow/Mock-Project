import { Col, Row } from 'antd';
import React from 'react';
import './NewsBox.scss';
import styled from 'styled-components';

const StyleHeader = styled.h5`
  color: ${(props) => props.theme.textColor};
`;

const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;

const StyleAuthor = styled.small`
  color: ${(props) => props.theme.textColor};
`;
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
            <StyleHeader className="main-content__content-header">
              {title}
            </StyleHeader>
          </a>
          <StyleText className="main-content__content-text">
            {content}
          </StyleText>
          <StyleAuthor>{author}</StyleAuthor>
        </Col>
      </Row>
    </div>
  );
}

export default NewsBox;

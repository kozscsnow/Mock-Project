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
        <Col xs={18} md={6} className="news-home__thumbnail-news">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="news-home__thumbnail-link"
          >
            <img
              src={urlToImage}
              alt="thumbnail"
              className="news-home__thumbnail-item"
            />
          </a>
        </Col>
        <Col xs={18} md={18} className="news-home__content">
          <a href={url} target="_blank">
            <StyleHeader className="news-home__content-header">
              {title}
            </StyleHeader>
          </a>
          <StyleText className="news-home__content-text">{content}</StyleText>
          <StyleAuthor>{author}</StyleAuthor>
        </Col>
      </Row>
    </div>
  );
}

export default NewsBox;

import { LikeOutlined } from '@ant-design/icons';
import { Button, Col, message, Row } from 'antd';
import covidHistoryAPI from 'apis/covidHistoryAPI';
import GroupColumnChart from 'components/GroupColumnChart';
import LineColumnChart from 'components/LineColumnChart';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { GlobalActions } from 'redux/rootAction';
import styled from 'styled-components';
import './MainContent.scss';

const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;
function MainContent(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [infoCovidHistory, setInfoCovidHistory] = useState({});
  // Fetch Covid History
  const fetCovidHistory = async () => {
    const params = {
      lastdays: 'all',
    };
    try {
      const infoCovidHistory = await covidHistoryAPI.getAll(params);
      setInfoCovidHistory(infoCovidHistory);
    } catch (error) {
      message.warning(
        'Something wrong !!! Please try again or check your connection'
      );
    }
    dispatch(GlobalActions.setIsLoading(false));
  };
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    fetCovidHistory();
  }, [dispatch]);
  return (
    <div className="main-content__container">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <div className="border-box no-padding">
            <GroupColumnChart
              infoCovidHistory={infoCovidHistory}
              type={'all'}
            />
          </div>
        </Col>
      </Row>
      <br />
      <Row gutter={[16, 16]} className="mobileHidden">
        <Col xs={24}>
          <div className="border-box no-padding">
            <LineColumnChart infoCovidHistory={infoCovidHistory} type={'all'} />
          </div>
        </Col>
      </Row>
      <br />
      <div className="main-home__verify-news">
        <StyleText>{t('home_main-content_news')}</StyleText>
        <div>
          <Button type="primary" className="main-home__verify-button">
            <LikeOutlined />
            Like
          </Button>
          <Button type="primary" className="main-home__verify-button">
            Share
          </Button>
        </div>
      </div>
      <br />
      <div className="main-home__tag">
        <div>
          <button className="main-home__tag-item">English</button>
          <button className="main-home__tag-item">Bahasha Melayu</button>
          <button className="main-home__tag-item">简体中文 </button>
          <button className="main-home__tag-item">繁體中文</button>
          <button className="main-home__tag-item">日本語</button>
          <button className="main-home__tag-item">Bahasa Indonesia</button>
          <button className="main-home__tag-item">Tiếng Việt</button>
          <button className="main-home__tag-item">ภาษาไทย</button>
          <button className="main-home__tag-item">코리언</button>
          <button className="main-home__tag-item">हिन्दी</button>
          <button className="main-home__tag-item">தமிழ்</button>
        </div>
        <p>Clear all</p>
      </div>
      <br />
    </div>
  );
}

export default MainContent;

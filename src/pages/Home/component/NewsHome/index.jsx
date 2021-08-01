import { Alert, List, message } from 'antd';
import newsAPI from 'apis/newsAPI';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalActions } from 'redux/rootAction';
import styled from 'styled-components';
import NewsBox from './components/NewsBox';

const StyleAlert = styled(Alert)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
  @media screen and (min-width: 576px) {
    width: 50%;
    top: 0px;
    left: 25%;
  }
`;

function NewsHome(props) {
  const [listNewsData, setListNewsData] = useState([]);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const fetchNewsData = async () => {
    try {
      const listNewsData = await newsAPI.getAll();
      setListNewsData(listNewsData);
      dispatch(GlobalActions.setIsLoading(false));
    } catch (error) {
      message.warning(
        'Something wrong !!! Please try again or check your connection'
      );
      setIsError(true);
    }
  };
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));

    fetchNewsData();
  }, [dispatch]);

  return (
    <div className="news-home__container">
      {isError && (
        <StyleAlert
          message="Error"
          description="Something Wrong !!! Please check your connection and try again"
          type="error"
          showIcon
          closable
        />
      )}
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {},
          pageSize: 5,
        }}
        dataSource={listNewsData}
        renderItem={(item) => (
          <>
            <br />
            <NewsBox
              title={item.title}
              author={item.author}
              content={item.content}
              url={item.url}
              urlToImage={item.urlToImage}
            />
          </>
        )}
      />
    </div>
  );
}

export default NewsHome;

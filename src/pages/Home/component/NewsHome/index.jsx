import React, { useEffect } from 'react';
import { message, Pagination } from 'antd';

import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { List, Alert, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import NewsBox from './components/NewsBox';
import { useDispatch } from 'react-redux';
import { GlobalActions } from 'redux/rootAction';
import newsAPI from 'apis/newsAPI';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

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
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const fetchNewsData = async () => {
      try {
        const listNewsData = await newsAPI.getAll();
        setListNewsData(listNewsData);
        dispatch(GlobalActions.setIsLoading(false));
        console.log(listNewsData);
      } catch (error) {
        // message.error('Something Wrong !!! Please check your Connection');
        setIsError(true);
      }
    };
    fetchNewsData();
  }, [dispatch]);

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'http://ant.design',
      title: `ant design part ${i}`,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

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
          onChange: (page) => {
            console.log(page);
          },
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

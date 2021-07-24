import React, { useEffect } from 'react';
import { Pagination } from 'antd';

import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import NewsBox from '../MainContent/components/NewsBox';
import { useDispatch } from 'react-redux';
import { GlobalActions } from 'redux/rootAction';
import newsAPI from 'apis/newsAPI';
import { v4 as uuidv4 } from 'uuid';


function NewsHome(props) {
  const [listNewsData, setListNewsData] = useState([]);

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
        alert(`
      Something wrong !!!
      Please try again or check your connection
      `);
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
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div>
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

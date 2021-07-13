import React from 'react';
import { Pagination } from 'antd';

function NewsHome(props) {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}

export default NewsHome;

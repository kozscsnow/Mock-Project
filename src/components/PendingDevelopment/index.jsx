import React from 'react';
import { Button, Result } from 'antd';
import { useHistory } from 'react-router';

function PendingDevelopment(props) {
  const history = useHistory();
  return (
    <div>
      <Result
        status="500"
        title="Some thing wrong !!!"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default PendingDevelopment;

import React from 'react';
import { Button, Result } from 'antd';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

function PendingDevelopment(props) {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <div>
      <Result
        status="500"
        title={t('pending_development_tittle')}
        subTitle={t('pending_development_sub-tittle')}
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

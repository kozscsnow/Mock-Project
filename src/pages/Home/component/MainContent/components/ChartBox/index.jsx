import GroupColumnChart from 'components/GroupColumnChart';
import React from 'react';

function ChartBox(props) {
  const { infoCovidHistory } = props;
  return (
    <div>
      <GroupColumnChart infoCovidHistory={infoCovidHistory} type={'all'} />
    </div>
  );
}

export default ChartBox;

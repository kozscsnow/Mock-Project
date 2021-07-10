import React from 'react';
import LineChart from '../../../../components/LineChart';
import MapChart from '../../../../components/MapChart';
import { Grid } from '@material-ui/core';

function Chart(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={12} sm={8}>
          <LineChart />
        </Grid>
        <Grid xs={12} sm={4}>
          <MapChart />
        </Grid>
      </Grid>
    </div>
  );
}

export default Chart;

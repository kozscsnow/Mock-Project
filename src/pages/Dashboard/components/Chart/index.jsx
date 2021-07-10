import React from 'react';
import LineChart from '../../../../components/LineChart';
import MapChart from '../../../../components/MapChart';
import { Grid } from '@material-ui/core';

function Chart(props) {
  const { listInfoCovidCountries } = props;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12}>
          <LineChart />
        </Grid>
        <Grid xs={12} sm={12}>
          <MapChart listInfoCovidCountries={listInfoCovidCountries} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Chart;

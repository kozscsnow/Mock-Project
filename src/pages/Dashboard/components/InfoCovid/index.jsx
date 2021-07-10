import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

function InfoCovid(props) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography component="p" variant="body2">
                so ca mac
              </Typography>
              <Typography component="span" variant="body2">
                200
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography component="p" variant="body2">
                so ca khoi
              </Typography>
              <Typography component="span" variant="body2">
                100
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography component="p" variant="body2">
                so tu vong
              </Typography>
              <Typography component="span" variant="body2">
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default InfoCovid;

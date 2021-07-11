import React from 'react';
// import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { Card, Col, Row } from 'antd';

function InfoCovidBox(props) {
  const { infoCovidAll } = props;
  const { cases, deaths, recovered } = infoCovidAll;
  return (
    <>
      {/* <Grid container spacing={3}>
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
      </Grid> */}
      <div className="site-card-wrapper">
        <Row gutter={8}>
          <Col xs={24} md={8}>
            <Card
              hoverable={true}
              title="Số ca mắc"
              bordered={true}
              loading={false}
              headStyle={{ 'text-align': 'center', backgroundColor: '#ff4757' }}
              bodyStyle={{ 'text-align': 'center' }}
            >
              {cases}
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              hoverable={true}
              title="Số ca khỏi"
              bordered={true}
              headStyle={{ 'text-align': 'center', backgroundColor: '#70a1ff' }}
              bodyStyle={{ 'text-align': 'center' }}
            >
              {recovered}
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              hoverable={true}
              title="Số ca tử vong"
              bordered={true}
              headStyle={{ 'text-align': 'center', backgroundColor: '#ffa502' }}
              bodyStyle={{ 'text-align': 'center' }}
            >
              {deaths}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default InfoCovidBox;

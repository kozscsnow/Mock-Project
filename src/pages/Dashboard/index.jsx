import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import covidAllAPI from '../../apis/covidAllAPI';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import covidHistoryAPI from '../../apis/covidHistoryAPI';
import InfoCovidBox from '../../components/InfoCovidBox';
import TableCovid from '../../components/TableCovid';
import { GlobalActions } from '../../redux/rootAction';
import Chart from './components/Chart';
import CountriesSelectorInput from './components/CountriesSelectorInput';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import covidVaccineAPI from 'apis/covidVaccineAPI';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './Dashboard.scss';
import MapChart from 'components/MapChart';
import LineChart from 'components/LineChart';
import PieChart from 'components/PieChart';
import ColumnChart from 'components/ColumnChart';
import LineColumnChart from 'components/LineColumnChart';
import GroupColumnChart from 'components/GroupColumnChart';

const { TabPane } = Tabs;

const { RangePicker } = DatePicker;

function Dashboard(props) {
  const dispatch = useDispatch();
  const [listInfoCovidCountries, setListInfoCovidCountries] = useState([]);
  const [infoCovidAll, setInfoCovidAll] = useState({});
  const [infoCovidHistory, setInfoCovidHistory] = useState({});
  const [listInfoCovidVaccine, setListInfoCovidVaccine] = useState([]);
  // Fetch Covid  Countries
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const fetchInfoCovidCountries = async () => {
      const listInfoCovidCountries = await covidCountriesAPI.getAll();
      setListInfoCovidCountries(listInfoCovidCountries);
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetchInfoCovidCountries();
  }, [dispatch]);
  // Fetch Covid All
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));

    const fetchCovidAll = async () => {
      const InfoCovidAll = await covidAllAPI.getAll();
      setInfoCovidAll(InfoCovidAll);
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetchCovidAll();
  }, [dispatch]);
  // Fetch Covid History
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));

    const fetCovidHistory = async () => {
      const params = {
        lastdays: 'all',
      };
      const infoCovidHistory = await covidHistoryAPI.getAll(params);
      setInfoCovidHistory(infoCovidHistory);
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetCovidHistory();
  }, [dispatch]);
  // Fetch Covid Vaccine
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));

    const fetchCovidVaccine = async () => {
      const params = {
        lastdays: '1',
      };
      const listInfoCovidVaccine = await covidVaccineAPI.getAll(params);
      setListInfoCovidVaccine(listInfoCovidVaccine);
      console.log(listInfoCovidVaccine);
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetchCovidVaccine();
  }, [dispatch]);

  const disableFutureDates = (current) =>
    current && current > moment().endOf('day');

  const handleDateChange = (value, dateString) => {
    console.log(value, dateString);
  };
  return (
    <div className="container">
      <header className="header-dashboard">
        <div className="header-dashboard__logo">logo</div>
        <input type="text" className="header-dashboard__input" />
        <div className="header-dashboard__contact"></div>
        <p className="header-dashboard__text">
          Coronavirus (COVID-19) Dashboard
        </p>
      </header>
      <content className="header-dashboard__content">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                Overview
              </span>
            }
            key="1"
          >
            <InfoCovidBox infoCovidAll={infoCovidAll} />

            <Row>
              <Col xs={24} lg={24}>
                <MapChart listInfoCovidCountries={listInfoCovidCountries} />
              </Col>
            </Row>

            <Row>
              <Col xs={24} lg={12}>
                <LineChart infoCovidHistory={infoCovidHistory} type={'all'} />
              </Col>
              <Col xs={24} lg={12}>
                <PieChart infoCovidAll={infoCovidAll} type={'all'} />
              </Col>
            </Row>
            <Row>
              <Col xs={24} lg={8}>
                <ColumnChart infoCovidHistory={infoCovidHistory} type={'all'} />
              </Col>
              <Col xs={24} lg={8}>
                <ColumnChart infoCovidHistory={infoCovidHistory} type={'all'} />
              </Col>
              <Col xs={24} lg={8}>
                <ColumnChart infoCovidHistory={infoCovidHistory} type={'all'} />
              </Col>
            </Row>

            <Row>
              <Col xs={24} lg={24}>
                <LineColumnChart
                  infoCovidHistory={infoCovidHistory}
                  type={'all'}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} lg={24}>
                <GroupColumnChart
                  infoCovidHistory={infoCovidHistory}
                  type={'all'}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Data table
              </span>
            }
            key="2"
          >
            <Space direction="vertical" size={12}>
              <RangePicker
                disabledDate={(current) => disableFutureDates(current)}
                onChange={handleDateChange}
              />
            </Space>

            <Chart
              listInfoCovidCountries={listInfoCovidCountries}
              infoCovidAll={infoCovidAll}
              infoCovidHistory={infoCovidHistory}
            />
            <br />
            <Row>
              <Col xs={24}>
                <TableCovid />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </content>
      {/* <Row justify="center">
        <CountriesSelectorInput
          listInfoCovidCountries={listInfoCovidCountries}
        />
      </Row> */}
      <footer className="footer-dashboard">
        <div className="footer-dashboard__wrapper">
          <div className="footer-dashboard__icon">icon</div>
          <p className="footer-dashboard__text">nguyen nhat khanh</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;

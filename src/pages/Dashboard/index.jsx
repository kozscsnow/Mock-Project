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
import { FundViewOutlined, TableOutlined } from '@ant-design/icons';
import './Dashboard.scss';
import MapChart from 'components/MapChart';
import LineChart from 'components/LineChart';
import PieChart from 'components/PieChart';
import ColumnChart from 'components/ColumnChart';
import LineColumnChart from 'components/LineColumnChart';
import GroupColumnChart from 'components/GroupColumnChart';
import HeaderDashBoard from './components/HeaderDashboard';
import HeaderDashboard from './components/HeaderDashboard';
import FooterDashboard from './components/FooterDashboard';
import ScrollToTopButton from 'components/ScrollToTopButton';

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
      try {
        const InfoCovidAll = await covidAllAPI.getAll();
        setInfoCovidAll(InfoCovidAll);
      } catch (error) {
        alert(`
        Something wrong !!!
        Please try again or check your connection
        `);
      }
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
      try {
        const infoCovidHistory = await covidHistoryAPI.getAll(params);
        setInfoCovidHistory(infoCovidHistory);
      } catch (error) {
        alert(`
        Something wrong !!!
        Please try again or check your connection
        `);
      }
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
      try {
        const listInfoCovidVaccine = await covidVaccineAPI.getAll(params);
        setListInfoCovidVaccine(listInfoCovidVaccine);
      } catch (error) {
        alert(`
        Something wrong !!!
        Please try again or check your connection
        `);
      }
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
      <HeaderDashboard />
      <content>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <FundViewOutlined />
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
                <TableOutlined />
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
      <FooterDashboard />
      <ScrollToTopButton />
    </div>
  );
}

export default Dashboard;

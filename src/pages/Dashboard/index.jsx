import { FundViewOutlined, TableOutlined } from '@ant-design/icons';
import { Col, DatePicker, Row, Skeleton, Tabs } from 'antd';
import covidVaccineAPI from 'apis/covidVaccineAPI';
import ColumnChart from 'components/ColumnChart';
import GroupColumnChart from 'components/GroupColumnChart';
import LineChart from 'components/LineChart';
import LineColumnChart from 'components/LineColumnChart';
import MapChart from 'components/MapChart';
import PieChart from 'components/PieChart';
import WrapperDashboard from 'HOCs/WrapperDashboard';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import covidAllAPI from '../../apis/covidAllAPI';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import covidHistoryAPI from '../../apis/covidHistoryAPI';
import InfoCovidBox from '../../components/InfoCovidBox';
import TableCovid from '../../components/TableCovid';
import { CovidInfoActions } from '../../redux/rootAction';
import './Dashboard.scss';
import styled from 'styled-components';

const StyleOverview = styled.span`
  color: ${(props) => props.theme.textColor};
`;
const { TabPane } = Tabs;

const { RangePicker } = DatePicker;

function Dashboard(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [listInfoCovidCountries, setListInfoCovidCountries] = useState([]);
  const [infoCovidAll, setInfoCovidAll] = useState({});
  const [infoCovidHistory, setInfoCovidHistory] = useState({});
  const [listInfoCovidVaccine, setListInfoCovidVaccine] = useState([]);
  const [isLocalLoading, setIsLocalLoading] = useState(true);

  // Fetch Covid  Countries
  const fetchInfoCovidCountries = async () => {
    const listInfoCovidCountries = await covidCountriesAPI.getAll();
    setListInfoCovidCountries(listInfoCovidCountries);
    dispatch(
      CovidInfoActions.getListInfoCovidCountries(listInfoCovidCountries)
    );
    setIsLocalLoading(false);
  };
  useEffect(() => {
    setIsLocalLoading(true);
    fetchInfoCovidCountries();
  }, [dispatch]);
  // Fetch Covid All
  const fetchCovidAll = async () => {
    try {
      const InfoCovidAll = await covidAllAPI.getAll();
      setInfoCovidAll(InfoCovidAll);
      dispatch(CovidInfoActions.getInfoCovidAll(InfoCovidAll));
    } catch (error) {
      alert(`
      Something wrong !!!
      Please try again or check your connection
      `);
    }
    // dispatch(GlobalActions.setIsLoading(false));
  };
  useEffect(() => {
    // dispatch(GlobalActions.setIsLoading(true));
    fetchCovidAll();
  }, [dispatch]);
  // Fetch Covid History

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
    // dispatch(GlobalActions.setIsLoading(false));
  };
  useEffect(() => {
    // dispatch(GlobalActions.setIsLoading(true));

    fetCovidHistory();
  }, [dispatch]);
  // Fetch Covid Vaccine
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
    // dispatch(GlobalActions.setIsLoading(false));
  };
  useEffect(() => {
    // dispatch(GlobalActions.setIsLoading(true));

    fetchCovidVaccine();
  }, [dispatch]);
  const disableFutureDates = (current) =>
    current && current > moment().endOf('day');
  const handleDateChange = (value, dateString) => {
    console.log(value, dateString);
  };
  const { cases, deaths, recovered } = infoCovidAll;

  return (
    <div>
      {/* <HeaderDashboard listInfoCovidCountries={listInfoCovidCountries} /> */}
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <StyleOverview>
                <FundViewOutlined />
                {t('overview')}
              </StyleOverview>
            }
            key="1"
          >
            <InfoCovidBox
              cases={cases}
              deaths={deaths}
              recovered={recovered}
              isLocalLoading={isLocalLoading}
            />

            <Row>
              <Col xs={24} lg={24}>
                {isLocalLoading ? (
                  <Skeleton paragraph={{ rows: 18 }} active />
                ) : (
                  <MapChart listInfoCovidCountries={listInfoCovidCountries} />
                )}
              </Col>
            </Row>

            <Row>
              <Col xs={24} lg={12}>
                <LineChart infoCovidHistory={infoCovidHistory} type={'all'} />
              </Col>
              <Col xs={24} lg={12}>
                <PieChart
                  cases={cases}
                  deaths={deaths}
                  recovered={recovered}
                  type={'all'}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} lg={8}>
                <ColumnChart
                  infoCovidHistory={infoCovidHistory}
                  type={'cases'}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ColumnChart
                  infoCovidHistory={infoCovidHistory}
                  type={'recovered'}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ColumnChart
                  infoCovidHistory={infoCovidHistory}
                  type={'deaths'}
                />
              </Col>
            </Row>

            <Row className="mobileHidden">
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
              <StyleOverview>
                <TableOutlined />
                {t('data_table')}
              </StyleOverview>
            }
            key="2"
          >
            {/* <Space direction="vertical" size={12}>
              <RangePicker
                disabledDate={(current) => disableFutureDates(current)}
                onChange={handleDateChange}
              />
            </Space> */}
            <Row>
              <Col xs={24}>
                <TableCovid
                  listInfoCovidCountries={listInfoCovidCountries}
                  isLocalLoading={isLocalLoading}
                />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default WrapperDashboard(Dashboard);

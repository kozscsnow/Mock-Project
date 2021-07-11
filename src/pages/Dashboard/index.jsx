import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import covidAllAPI from '../../apis/covidAllAPI';
import covidCountriesAPI from '../../apis/covidCoutriesAPI';
import covidHistoryAPI from '../../apis/covidHistoryAPI';
import InfoCovidBox from '../../components/InfoCovidBox';
import LineChart from '../../components/LineChart';
import MapChart from '../../components/MapChart';
import TableCovid from '../../components/TableCovid';
import { GlobalActions } from '../../redux/rootAction';
import Chart from './components/Chart';
import CountriesSelectorInput from './components/CountriesSelectorInput';

function Dashboard(props) {
  const dispatch = useDispatch();
  const [listInfoCovidCountries, setListInfoCovidCountries] = useState([]);
  const [infoCovidAll, setInfoCovidAll] = useState({});
  const [infoCovidHistory, setInfoCovidHistory] = useState({});
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
      const infoCovidHistory = await covidHistoryAPI.getAll();
      setInfoCovidHistory(infoCovidHistory);
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetCovidHistory();
  }, [dispatch]);
  return (
    <div className="container">
      <Row justify="center">
        <CountriesSelectorInput
          listInfoCovidCountries={listInfoCovidCountries}
        />
      </Row>
      <br />

      <InfoCovidBox infoCovidAll={infoCovidAll} />

      <br />
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
    </div>
  );
}

export default Dashboard;

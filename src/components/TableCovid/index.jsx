import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TableCovid(props) {
  const { listInfoCovidCountries, localLoading } = props;
  const [DataCovidAll, setDataCovidAll] = useState([]);
  useEffect(() => {
    if (listInfoCovidCountries) {
      const dataCovid = listInfoCovidCountries.map((infoCountry) => {
        return {
          key: uuidv4(),
          country: infoCountry.country,
          population: infoCountry.population,
          cases: infoCountry.cases,
          recovered: infoCountry.recovered,
          deaths: infoCountry.deaths,
          active: infoCountry.active,
          critical: infoCountry.critical,
          tests: infoCountry.tests,
          undefined: infoCountry.undefined,
        };
        // return [infoCountry.country, infoCountry.cases, infoCountry.recovered];
      });
      setDataCovidAll(dataCovid);
    }
  }, [listInfoCovidCountries]);
  const columns = [
    {
      title: 'Country',
      dataIndex: 'country',
      sorter: (a, b) => a.country.length - b.country.length,
      sortDirections: ['descend'],
      fixed: 'left',
    },
    {
      title: 'Cases',
      dataIndex: 'cases',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.cases - b.cases,
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.recovered - b.recovered,
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.deaths - b.deaths,
    },
    {
      title: 'Active',
      dataIndex: 'active',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.active - b.active,
    },
    {
      title: 'Critical',
      dataIndex: 'critical',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.critical - b.critical,
    },
    {
      title: 'Tested',
      dataIndex: 'tests',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.tests - b.tests,
    },
    {
      title: 'Undefined',
      dataIndex: 'undefined',
      defaultSortOrder: 'descend',
      responsive: ['lg'],
      sorter: (a, b) => a.undefined - b.undefined,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div>
      <Table
        scroll={{ x: true }}
        columns={columns}
        dataSource={DataCovidAll}
        onChange={onChange}
        loading={localLoading}
        pagination={{ position: ['bottomLeft'], responsive: true }}
        sticky
      />
    </div>
  );
}

export default TableCovid;

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
          cases: infoCountry.cases,
          recovered: infoCountry.recovered,
          deaths: infoCountry.deaths,
        };
        // return [infoCountry.country, infoCountry.cases, infoCountry.recovered];
      });
      setDataCovidAll(dataCovid);
    }
  }, [listInfoCovidCountries]);
  console.log(DataCovidAll);
  const columns = [
    {
      title: 'Country',
      dataIndex: 'country',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.country.length - b.country.length,
      sortDirections: ['descend'],
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
  ];

  const data = [
    {
      key: '1',
      country: 'John Brown',
      cases: 32,
      recovered: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '7',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '9',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '10',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '11',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '12',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div>
      <Table
        columns={columns}
        dataSource={DataCovidAll}
        onChange={onChange}
        loading={localLoading}
      />
    </div>
  );
}

export default TableCovid;

import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

function TableCovid(props) {
  const { t } = useTranslation();
  const { listInfoCovidCountries, isLocalLoading } = props;
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
      title: `${t('country')}`,
      dataIndex: 'country',
      sorter: (a, b) => a.country.length - b.country.length,
      sortDirections: ['descend'],
      fixed: 'left',
      width: 150,
    },
    {
      title: `${t('cases')}`,
      dataIndex: 'cases',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.cases - b.cases,
      width: 150,
    },
    {
      title: `${t('recovered')}`,
      dataIndex: 'recovered',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.recovered - b.recovered,
      width: 150,
    },
    {
      title: `${t('deaths')}`,
      dataIndex: 'deaths',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.deaths - b.deaths,
      width: 150,
    },
    {
      title: `${t('active')}`,
      dataIndex: 'active',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.active - b.active,
      width: 150,
    },
    {
      title: `${t('critical')}`,
      dataIndex: 'critical',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.critical - b.critical,
      width: 150,
    },
    {
      title: `${t('tested')}`,
      dataIndex: 'tests',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.tests - b.tests,
      width: 150,
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
        loading={isLocalLoading}
        pagination={{ position: ['bottomLeft'], responsive: true }}
        sticky
      />
    </div>
  );
}

export default React.memo(TableCovid);

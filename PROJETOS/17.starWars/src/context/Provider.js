import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import planetAPI from '../service/planetAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataNameFilter, setDataNameFilter] = useState([]);
  const [filterIN, setFilterIN] = useState(false);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByMeasurments: { column: 'population', comparison: 'maior que', value: 0 },
  });
  const [opt1, setOpt1] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  
  const handleAPIRequest = async () => {
    const APIreturn = await planetAPI();
    const dataAPI = APIreturn
      .filter((item) => delete item.residents);
    setData(dataAPI);
  };

  useEffect(() => {
    handleAPIRequest();
  }, []);

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
    dataNameFilter,
    setDataNameFilter,
    filterIN,
    setFilterIN,
    opt1,
    setOpt1,
    handleAPIRequest,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

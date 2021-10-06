import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import planetAPI from '../service/planetAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
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

  useEffect(() => {
    const handleAPIRequest = async () => {
      const APIreturn = await planetAPI();
      const dataAPI = APIreturn
        .filter((item) => delete item.residents);
      setData(dataAPI);
    };
    handleAPIRequest();
  }, []);

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
    dataFiltered,
    setDataFiltered,
    filterIN,
    setFilterIN,
    opt1,
    setOpt1,
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

import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

const SearchBar = () => {
  const contexto = useContext(Context);
  const {
    data,
    setData,
    filter,
    setFilter,
    setDataNameFilter,
    filterIN,
    setFilterIN,
    opt1,
    handleAPIRequest,
  } = contexto;

  const { filterByMeasurments: { column, comparison, value } } = filter;
  const opt2 = ['maior que', 'menor que', 'igual a'];
  const objLiterals = {
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
    'igual a': (a, b) => Number(a) === Number(b),
  };

  const handleMeasChange = ({ target }) => {
    setFilter({
      ...filter,
      filterByMeasurments: {
        ...filter.filterByMeasurments,
       [target.name]: target.value },
    });
  };

  const handleSubmit = () => {
    const dataFilteredBy = data
      .filter((planet) => objLiterals[comparison](planet[column], value));
    setData(dataFilteredBy);
    setFilterIN(true);
  };

  useEffect(() => {
    const { filterByName: { name } } = filter;
    const nameFilter = data
      .filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));
    setDataNameFilter(nameFilter);
  }, [data, filter, setDataNameFilter]);

  const handleNameChange = ({ target }) => {
    setFilter({ ...filter, filterByName: { name: target.value } });
  };

  const removeFilter = () => {
    handleAPIRequest();
    setFilterIN(false);
  };

  const filterON = (
    <div data-testid="filter" className="filterON">
      <span>{column}</span>
      <span>{comparison}</span>
      <span>{value}</span>
      <button onClick={ removeFilter } type="button">X</button>
    </div>
  );

  return (
    <>
      <span>Filter by name: </span>
      <input
        onChange={ handleNameChange }
        data-testid="name-filter"
        type="text"
      />
      <br />

      <span>Filter by measurements: </span>
      <select name="column" onChange={ handleMeasChange } data-testid="column-filter">
        { opt1.map((opt, i) => <option key={ i }>{opt}</option>) }
      </select>

      <select
        name="comparison"
        onChange={ handleMeasChange }
        data-testid="comparison-filter"
      >
        { opt2.map((opt, i) => <option name={ opt } key={ i }>{opt}</option>) }
      </select>

      <input
        name="value"
        type="number"
        onChange={ handleMeasChange }
        className="value-filter"
        data-testid="value-filter"
        value={ value }
      />

      <button onClick={ handleSubmit } type="button" data-testid="button-filter"
      className="filter-button">
        FILT
      </button>
      <br />

      <span>FilterIn: </span>
      { filterIN ? filterON : '-' }
    </>
  );
};

export default SearchBar;

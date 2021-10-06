import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

const SearchBar = () => {
  const contexto = useContext(Context);
  const {
    data,
    setFilter,
    filter,
    setDataFiltered,
    filterIN,
    setFilterIN,
    opt1,
    setOpt1,
  } = contexto;
  const { filterByMeasurments: { column, comparison, value } } = filter;
  const opt2 = ['maior que', 'menor que', 'igual a'];
  const objLiterals = {
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
    'igual a': (a, b) => Number(a) === Number(b),
  };

  console.log(filter);

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
    setDataFiltered(dataFilteredBy);
    setFilterIN(true);
    setOpt1(opt1.filter((opt) => opt !== column));
    console.log(dataFilteredBy);
  };

  useEffect(() => {
    const { filterByName: { name } } = filter;
    const dataFiltered = data
      .filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
    setDataFiltered(dataFiltered);
  }, [filter, data, setDataFiltered]);

  const handleNameChange = ({ target }) => {
    setFilter({
      ...filter,
      filterByName:
      { name: target.value },
    });
  };

  const removeFilter = () => {
    setDataFiltered([]);
    setFilterIN(false);
    // setOpt1(...opt1, column);
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
        // value={ name }
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
      />

      <button onClick={ handleSubmit } type="button" data-testid="button-filter">
        FILT
      </button>
      <br />

      <span>FilterIn: </span>
      { filterIN ? filterON : '-' }
    </>
  );
};

export default SearchBar;

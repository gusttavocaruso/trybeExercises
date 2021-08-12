import React from 'react';
import PropTypes from 'prop-types';
import * as Api from '../services/api';

class SideBar extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    Api.getCategories().then((data) => this.setState({
      categories: data,
    }));
  }

  render() {
    const { categories } = this.state;
    const { filter } = this.props;
    return (
      <ul>
        {categories.map((category) => (
          <li
            key={ category.id }
          >
            <button
              data-testid="category"
              type="button"
              onClick={ () => filter(category.id) }
            >
              {category.name }
            </button>
          </li>))}
      </ul>
    );
  }
}

SideBar.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default SideBar;
// feito pelo grupo via pair programming

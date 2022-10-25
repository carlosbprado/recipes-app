import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ verifyPage }) {
  const [disabled, setDisabled] = useState(false);
  const [search, setSearch] = useState('');

  const history = useHistory();

  function handleClickSearch() {
    setDisabled(!disabled);
  }

  const handleSearch = ({ target: { value } }) => setSearch(value);

  return (
    <header>
      <div>
        <title data-testid="page-title">Recipes App</title>
        {
          verifyPage ? (
            <button type="button" onClick={ () => history.push('/profile') }>
              <img
                src={ profileIcon }
                alt="profile"
                data-testid="profile-top-btn"
              />
            </button>
          ) : (
            <div>
              <button type="button" onClick={ () => history.push('/profile') }>
                <img
                  src={ profileIcon }
                  alt="profile"
                  data-testid="profile-top-btn"
                />
              </button>
              <button type="button" onClick={ handleClickSearch }>
                <img
                  src={ searchIcon }
                  alt="search"
                  data-testid="search-top-btn"
                />
              </button>
            </div>

          )
        }
        {
          disabled && (
            <input
              type="text"
              value={ search }
              placeholder="Search Recipe"
              data-testid="search-input"
              disabled={ disabled }
              onChange={ handleSearch }
            />
          )
        }

      </div>
    </header>
  );
}

Header.propTypes = { verifyPage: PropTypes.bool.isRequired };

export default Header;

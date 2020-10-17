import React from 'react';

import './search-panel.css';

const SearchPanel = ({handleKey}) => {

 

  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              onChange={handleKey}
              />
  );
};

export default SearchPanel;

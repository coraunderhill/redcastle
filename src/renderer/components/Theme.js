import React from 'react';

import Toolbar from './Toolbar';

/**
 * Theme component
 * @param {Object} props Component properties
 * @param {JSX.Element[]} props.children Child components to be rendered
 * @returns {JSX.Element} React component
 */
const Theme = props => {

  return (
    <>
      <Toolbar />
      <div id="container">
        {props.children}
      </div>
    </>
  );
};

export default Theme;

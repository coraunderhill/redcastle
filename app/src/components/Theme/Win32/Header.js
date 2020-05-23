// Import Node modules
import React from 'react';

/**
 * Windows header wrapper
 * @param {Object} props Component properties
 * @param {Object} props.children Component children
 * @returns {Object} React component
 */
const Header = props => {

  const { children } = props;

  return (
    <header>
      {children}
    </header>
  );
}

export default Header

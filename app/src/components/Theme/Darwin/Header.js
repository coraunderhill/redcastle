// Import Node modules
import React from 'react';

/**
 * macOS header wrapper
 * @param {Object} props Component properties
 * @param {Object} props.children Component children
 * @returns {Object} React component
 */
const Header = props => {

  const { children } = props;

  return (
    <div className="toolbar toolbar-header">
      {children}
    </div>
  );
}

export default Header;

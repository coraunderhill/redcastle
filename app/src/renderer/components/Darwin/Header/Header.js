// Import Node modules
import React from 'react';

// Import site content
import { siteTitle } from '@static/json/content-en.json';

/**
 * macOS header component
 * @returns {Object} React component
 */
const Header = () => {

  return (
    <div className="toolbar toolbar-header">
      <h1 className="title">{siteTitle}</h1>
    </div>
  );
}

export default Header;

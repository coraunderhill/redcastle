// Import Node modules
import React from 'react';

// Import React components
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

/**
 * Windows app template
 * @param {Object} view React component to be served
 * @returns {Object} React component
 */
const Win32 = view => (
  <div className="ms-Grid">

    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Header />
      </div>
    </div>

    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
        <Nav />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
        {view}
      </div>
    </div>

  </div>
);

export default Win32;

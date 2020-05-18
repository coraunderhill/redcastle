// Import Node modules
import React from 'react';

// Import React components
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

/**
 * macOS app template
 * @param {Object} view React component to be served
 * @returns {Object} React component
 */
const Darwin = view => (
  <div className="window">

    <Header />

    <div className="window-content">
      <div className="pane-group">

        <div className="pane-sm sidebar">
          <Nav />
        </div>

        <div className="pane">
          {view}
        </div>

      </div>
    </div>

  </div>
);

export default Darwin;

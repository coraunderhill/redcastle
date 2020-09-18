// Import modules
import React from 'react';

// Import components
import Header from './Header';
import Nav from './Nav';

// Import resources
import '@static/scss/photon/main';

/**
 * macOS app component
 * @param {Object} props Component properties
 * @param {Object} props.children Child components to be rendered
 * @returns {Object} React component
 */
const Theme = props => (
  <div className="window">

    <Header />

    <div className="window-content">
      <div className="pane-group">
        <div className="pane-sm sidebar">
          <Nav />
        </div>

        <div className="pane">
          {props.children}
        </div>
      </div>
    </div>

  </div>
);

export default Theme;

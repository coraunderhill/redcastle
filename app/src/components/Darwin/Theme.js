// Import Node modules
import React from 'react';

// Import React components
import Header from './Header/Header';
import Nav from './Nav/Nav';

/**
 * macOS app template
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

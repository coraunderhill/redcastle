// Import Node modules
import React from 'react';
import { Fabric } from '@fluentui/react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';

// Import React components
import Nav from './Nav/Nav';

// Import resources
import 'Static/scss/win32/win32';

/**
 * Windows app component
 * @param {Object} props Component properties
 * @param {Object} props.children Child components for rendering
 * @returns {JSX.Element} React component
 */
const Theme = props => {

  // Initialize Fabric UI icons
  initializeIcons();

  return (
    <Fabric>
      <Nav />
      <div className="ms-Grid">
        {props.children}
      </div>
    </Fabric>
  );
};

export default Theme;

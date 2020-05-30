// Import Node modules
import React from 'react';
import { initializeIcons } from '@uifabric/icons';
import { Fabric } from '@fluentui/react/lib/Fabric';

// Import React components
import Nav from './Nav/Nav';

// Import resources
import 'Static/scss/platform/_win32-fabric';

/**
 * Windows app template
 * @param {Object} props Component properties
 * @param {Object} props.children Child components for rendering
 * @returns {Object} React component
 */
const Theme = props => {

  const { children } = props;

  // Initialize Fluent UI icons
  initializeIcons();

  return (
    <Fabric>
      <Nav />
      {children}
    </Fabric>
  );
};

export default Theme;

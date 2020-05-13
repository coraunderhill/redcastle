// Import Node modules
import { platform } from 'os';
import React from 'react';
import { render } from 'react-dom';

// Import CSS frameworks
import photon from '../static/css/_photon';

// Import React components
import Darwin from '../components/Templates/Darwin';

/**
 * Update React view
 * @param {Object} view React component to load with template
 */
const updateView = (view) => {
  let App;
  let cssFramework;

  // Set resources depending on host OS
  if (platform == 'darwin') {
    App = Darwin(view);
    cssFramework = photon;
  }

  // Render app
  render(App, document.getElementById('root'));
}

export default updateView;

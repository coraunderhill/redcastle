// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import template handler
import { getTheme } from './theme';

/**
 * Update React view
 * @param {Object} View React component to load with template
 */
const updateView = View => {

  // Get the React theme component for this platform
  const Theme = getTheme();

  // Render theme with View component
  render(Theme(View), document.getElementById('root'));
}

export default updateView;

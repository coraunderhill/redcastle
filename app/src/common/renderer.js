// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import template handler
import { getTheme } from './theme';

/**
 * Update React view
 * @param {Object} view React component to load with template
 */
const updateView = view => {

  const Theme = getTheme();
  render(Theme(view), document.getElementById('root'));
}

export default updateView;

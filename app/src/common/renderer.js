// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import React components
import Theme from 'Components/Theme/';

/**
 * Update React view
 * @param {Object} View React component to load with template
 */
const updateView = View => {

  // Render theme with View component
  render(<Theme>{View}</Theme>, document.getElementById('root'));
}

export default updateView;

// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import React components
import App from 'Components/';

/**
 * Update React view
 * @param {Object} View React component to render with template
 */
const updateView = View => {

  render(<App>{View}</App>, document.getElementById('root'));

}

export default updateView;

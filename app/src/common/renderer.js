// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import React components
import Theme from 'Components/Theme';

/**
 * Update React view
 * @param {Object} View React component to render with template
 */
const updateView = View => {

  render(<Theme>{View}</Theme>, document.getElementById('root'));

}

export default updateView;

// Import modules
import React from 'react';
import { render } from 'react-dom';
import * as Components from '@components/';

/**
 * Update React view
 * @param {string} view Name of the component to render
 * @param {string} data Data to include with the component
 */
const updateView = (view, data) => {

  // Check that both arguments have been passsed
  if (view === undefined || data === undefined || view == '') {
    console.error('updateView requires two parameters')
  }

  // Get the appropriate theme component
  const Theme = Components.Theme;
  const View = Components[view];

  // Update the view
  render(<Theme><View data={data}></View></Theme>, document.getElementById('root'));

}

export default updateView;

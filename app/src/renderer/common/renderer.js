// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import React components
import App from '@components/';

/**
 * Update React view
 * @param {Object} View React component to render with template
 * @param {string} stateURL URL to push to the history state
 */
const updateView = (View, stateURL) => {

  // Check that both arguments have been passsed
  if (View === undefined || stateURL === undefined || stateURL == '') {
    console.error('updateView requires two parameters')
  }

  /**
   * New history state object
   * @type {Object}
   */
  const newState = {};

  // Deconstruct history state
  const { state } = history;


  // Sets the state counter
  newState.i = (state === null) ? 0 : state.i++;

  // Update the history state
  history.pushState(newState, '', stateURL);

  // Update the view
  render(<App>{View}</App>, document.getElementById('root'));

}

export default updateView;

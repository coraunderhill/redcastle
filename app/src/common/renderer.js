// Import Node modules
import { remote } from 'electron';
import React from 'react';
import { render } from 'react-dom';

// Import OS module from Node
const os = remote.require('os');

// Import React components
import Darwin from 'Components/Templates/Darwin';
import Win32 from 'Components/Templates/Win32';

/**
 * Theme component to be set by renderer
 * @type {null}
 */
let Theme = null;

/**
* Inject frameworks into the DOM and returns appropriate theme component
* @param {string} platform Host OS platform from Node
* @returns {Promise} Returns a Promise for frameworks that require injection
* or null for ones that don't
*/
const getTheme = () => {

  /**
   * Injects the CSS framework into the DOM
   * @param {string} framework Framework name to be injected
   */
  const injectFwk = framework => {
    const exists = document.getElementById('css-fwk');

    if (exists !== null) exists.href = `res/${framework}.css`
    if (exists === null) {
      const element = document.createElement('link');
      element.href = `res/${framework}.css`;
      element.id = 'css-fwk';
      element.rel = 'stylesheet';
      document.head.appendChild(element);
    }
  }

  const host = os.platform();

  switch (host) {
    case 'darwin': {
      injectFwk('photon');
      Theme = Darwin;
      break;
    }
    case 'win32': {
      Theme = Win32;
      break;
    }
  }

  return Theme;

}

/**
 * Update React view
 * @param {Object} View React component to load with template
 */
const updateView = View => {

  if (Theme === null) Theme = getTheme();

  // Render theme with View component
  render(<Theme>{View}</Theme>, document.getElementById('root'));
}

export default updateView;

// Import Node modules
import { platform } from 'os';
import React from 'react';

// Import React components
import Darwin from '../components/Templates/Darwin';
import Win32 from '../components/Templates/Win32';

let theme = null;

/**
* Inject frameworks into the DOM
* @param {string} css Name of the CSS framework to be loaded
* @returns {Promise} Returns a Promise for frameworks that require injection
* or null for ones that don't
*/
const loadFramework = css => {

  // If we're using Photon, inject the link tag for proper CSS
  if (css == 'photon') {
    const exists = document.getElementById('css-fwk');

    if (exists !== null) exists.href = `res/${css}.css`
    if (exists === null) {
      const element = document.createElement('link');
      element.href = `res/${css}.css`;
      element.id = 'css-fwk';
      element.rel = 'stylesheet';
      document.head.appendChild(element);
    }
  }

}

/**
 * Sets the theme value
 * @param {string} platform Host OS name from Node
 */
const setTheme = platform => {

  switch (platform) {
    case 'darwin': {
      theme = Darwin;
      break;
    }
    case 'win32': {
      theme = Win32;
      break;
    }
  }

}

/**
 * Gets the current theme based on the host OS
 * @returns {Object} Template component
 */
export const getTheme = () => {

  // Check if we've already set the theme
  if (theme === null) {
    // Get host OS and load any additional resources
    const os = platform();
    if (os == 'darwin') {
      loadFramework('photon');
    }
    setTheme(os);
  }

  // Return selected theme
  return theme;

};

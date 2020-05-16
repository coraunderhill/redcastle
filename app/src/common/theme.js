// Import Node modules
import { platform } from 'os';
import React from 'react';

// Import React components
import Darwin from '../components/Templates/Darwin';
import Win32 from '../components/Templates/Win32';

/**
 * Application theme handler
 * @returns {Object} Template component
 */
export const getTheme = () => {

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
      console.log(exists)

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

  // Get host OS and load any additional resources
  const os = platform();
  if (os == 'darwin') {
    loadFramework('photon');
    return Darwin;
  }
  else if (os == 'win32') return Win32;

};

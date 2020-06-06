// Import Node modules
import { remote } from 'electron';
import React from 'react';

// Import React components
import Darwin from './Darwin/Theme';
import { WatchDetails as WatchDetailsMac } from './Darwin/Watch/Watch';
import Win32 from './Win32/Theme';
import { WatchDetails as WatchDetailsWin } from './Win32/Watch/Watch';

// Import OS module from Node
const os = remote.require('os');

/**
 * Current host OS
 * @type {string}
 * @default
 */
const host = os.platform();

/**
 * Injects a specified CSS framework into the DOM
 * @param {string} framework Framework name to be injected
 */
const injectFwk = framework => {
  /**
   * Checks if the framework element exists and binds to it
   * @type {null|Object} Element object if element exists; null if not
   */
  const exists = document.getElementById('css-fwk');

  // If the element exists already, set it's href
  if (exists !== null) exists.href = `res/${framework}.css`
  if (exists === null) {
    /**
     * New framework link element
     * @type {HTMLLinkElement} New link element
     */
    const element = document.createElement('link');
    element.href = `res/${framework}.css`;
    element.id = 'css-fwk';
    element.rel = 'stylesheet';

    // Add the new element to the end of the head element
    document.head.appendChild(element);
  }
}

/**
* Gets the current theme directory for loading in platform-specific components
* @param {string} name Component name to be returned
* @returns {Object} Specified React component from appropriate theme
*/
export const getThemeComponent = name => {

  /**
   * Darwin theme exports
   * @type {Object}
   */
  const DarwinExports = {
    WatchDetails: WatchDetailsMac,
  };

  /**
   * Win32 theme exports
   * @type {Object}
   */
  const Win32Exports = {
    WatchDetails: WatchDetailsWin,
  };

  /**
   * Automatically resolves the appropriate theme object
   * @type {Object}
   */
  const which = (host == 'darwin') ? DarwinExports : Win32Exports;

  // Make sure the component we requested is in the current theme
  if (!(name in which)) console.error(`Requested component not found: ${name}`);

  return which[name];

}

/**
 * Main app component
 * @param {Object} props Component properties
 * @returns {Object} React component
 */
const App = props => {

  const { children } = props;

  // Set the theme based on the host OS
  if (host == 'darwin') {
    injectFwk('photon');
    return <Darwin>{children}</Darwin>
  }
  else if (host == 'win32') {
    return <Win32>{children}</Win32>
  }

}

export default App;

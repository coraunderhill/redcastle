// Import Node modules
import { remote } from 'electron';
import React from 'react';

// Import theme components
import Darwin from './Darwin';
import Win32 from './Win32';

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

  switch (host) {
    case 'darwin': {
      return Darwin[`${name}`];
    }
    case 'win32': {
      return Win32[`${name}`];
    }
  }

}

/**
 * Gets the current theme based off of the host OS
 * @param {Object} props Component properties
 * @returns {Object} React component
 */
const Theme = props => {

  const { children } = props;

  /**
   * Resulting theme component
   * @member
   */
  let Result;

  // Set the theme based on the host OS
  if (host == 'darwin') {
    injectFwk('photon');
    Result = Darwin.Theme;
  }
  else if (host == 'win32') {
    Result = Win32.Theme;
  }

  return <Result>{children}</Result>;

}

export default Theme;

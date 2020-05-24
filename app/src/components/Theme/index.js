// Import Node modules
import { remote } from 'electron';
import React, { useState } from 'react';

// Import theme components
import Darwin from './Darwin/';
import Win32 from './Win32/';

// Import OS module from Node
const os = remote.require('os');

/**
 * Current host OS
 * @type {string}
 * @default
 */
const host = os.platform();

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

/**
* Gets the current theme directory for loading in platform-specific components
* @param {string} name Component name to be returned
* @returns {string|Object} Returns the string name of the theme folder to be used
*/
export const getThemeComponent = name => {

  // Return appropriate
  switch (host) {
    case 'darwin': {
      return Darwin[`${name}`];
    }
    case 'win32': {
      return Win32[`${name}`];
    }
  }

}

const Theme = props => {

  const { children } = props;

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

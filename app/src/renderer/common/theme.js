// Import components
import { remote } from 'electron';
import darwin from '@darwin/';
import win32 from '@win32/'

// Import OS module from Node
const os = remote.require('os');

/**
 * Current host OS
 * @type {string}
 * @default
 */
const host = os.platform();

/**
 * Gets a requested component from the platform-appropriate theme
 * @param {string} name Name of the requested component
 * @returns {JSX.Element|boolean} Component object if successful, false otherwise
 */
export const getComponent = name => {

  const theme = (host === 'darwin') ? darwin : win32;

  if (!(name in theme)) {
    console.error('Theme component not found.');
    return false;
  }

  return theme[name];
}

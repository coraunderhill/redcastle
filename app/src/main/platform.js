// Import Node modules
import { nativeTheme } from 'electron';
import { platform } from 'os';

/**
 * Current host OS
 * @type {string}
 * @default
 */
const host = platform();

/**
 * Sets the Electron BrowserWindow configuration with platform-appropriate
 * properties.
 * @returns {Object} BrowserWindow config object
 */
export const windowCfg = () => {

  /**
   * Electron window background color. Depends on the current system theme.
   * @type {string}
   * @default
   */
  const bgColor = (nativeTheme.shouldUseDarkColors)
    ? '#CC292A2B'
    : '#CCFFFFFF';

  /**
   * Flag for determining if host is running OS X or macOS
   * @type {boolean}
   * @default
   */
  const isMac = (!!(host == 'darwin'));

  /**
   * Main config object. Contains platform-ambiguous properties.
   * @type {Object}
   */
  const cfg = {
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  };

  // Set any Mac-specific properties
  if (isMac) {
    cfg.backgroundColor = bgColor;
    cfg.titleBarStyle = 'hidden';
    cfg.transparent = true;
    cfg.vibrancy = 'sidebar';
  }

  return cfg;

}

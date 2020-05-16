// Import Node modules
import { platform } from 'os';

// Import React components
import Darwin from '../components/Templates/Darwin';
import Win32 from '../components/Templates/Win32';

/**
 * Inject frameworks into the DOM
 * @param {string} css Name of the CSS framework to be loaded
 */
const loadFramework = css => {

  /**
   *
   * @param {string} framework Name of the framework file to be loaded
   */
  const injectLink = framework => {
    const exists = document.getElementById('css-fwk');
    let element;
    let fwk;

    if (exists === null) {
      element = document.createElement('link');
      element.href = `res/${framework}.css`;
      element.id = 'css-fwk';
      element.rel = 'stylesheet';
    }
    else {
      element = exists;
      element.href = framework;
    }

    return document.head.appendChild(element);
  }

  if (css == 'photon') {
    injectLink('photon');
  }
}

/**
 * Application theme handler
 * @returns {Object} Template component and any additional resources
 */
export const getTheme = () => {

  switch (platform()) {
    case 'darwin': {
      loadFramework('photon');
      return Darwin;
    }
    case 'win32': {
      return Win32;
    }
  }

};

import React from 'react';
import { ipcRenderer } from 'electron';

import Nav from './Nav';

/**
 * Toolbar component
 * @returns {JSX.Element} React component
 */
const Toolbar = () => {

  /**
   * Transforms the BrowserWindow
   * @param {string} arg `max`, `min`, or `res`
   */
  const _transform = arg => ipcRenderer.send('transform', arg);

  return (
    <div id="toolbar" onDoubleClick={() => _transform('max')}>
      <Nav />
    </div>
  );
}

export default Toolbar;

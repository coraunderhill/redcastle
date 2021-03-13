import React from 'react';
import { ipcRenderer } from 'electron';

/**
 * Toolbar component
 * @returns {JSX.Element} React component
 */
const Toolbar = () => {

  /**
   * Controls when to display the traffic light controls
   * @param {boolean} b Boolean flag
   */
  const _showControls = b => ipcRenderer.send('windowControls', b);

  /**
   * Transforms the BrowserWindow
   * @param {string} arg `max`, `min`, or `res`
   */
  const _transform = s => ipcRenderer.send('transform', s);

  return (
    <div id="toolbar" onDoubleClick={() => _transform('max')}>
      <div id="windowControls"
        onMouseOut={() => _showControls(false)}
        onMouseOver={() => _showControls(true)} />
    </div>
  );
}

export default Toolbar;

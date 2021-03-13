/**
 * @module main/ipc
 */

import { ipcMain } from 'electron';
import { window } from './index';

/**
 *  Controls the appearance of the traffic light controls
 */
const _showControls = () => ipcMain.on('windowControls', (e, arg) => (

  window.setWindowButtonVisibility(arg)

));

/**
 * Transforms the BrowserWindow
 */
const _transform = () => ipcMain.on('transform', (e, arg) => {

  if (arg == 'max') {
    window.maximize();
  }

})

// Start up the IPC listeners
_showControls();
_transform();

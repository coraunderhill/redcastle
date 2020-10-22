/**
 * @module main/ipc
 */

import { ipcMain } from 'electron';
import { window } from './';

/**
 * Transforms the BrowserWindow
 */
const transform = () => ipcMain.on('transform', (e, arg) => {

  if (arg == 'max') {
    window.maximize();
  }
})

/**
 * Starts the IPC listeners
 */
const listen = () => {

  transform();

}

export default listen;

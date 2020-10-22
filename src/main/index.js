/**
 * @module main
 */

import { BrowserWindow, app } from 'electron';
import { resolve } from 'path';
import listen from './ipc';

// Start the IPC listeners
listen();

/**
 * @type {Electron.BrowserWindowConstructorOptions}
 */
const config = {
  height: 600,
  minHeight: 480,
  minWidth: 480,
  scrollBounce: true,
  titleBarStyle: 'hiddenInset',
  vibrancy: 'sidebar',
  webPreferences: {
    nodeIntegration: true,
  },
  width: 800,
};

/**
 * Main app window
 * @type {null|Electron.BrowserWindow}
 */
export let window = null;

/**
 *  Dev tools window
 * @type {null|Electron.BrowserWindow}
 */
let devTools = null;

// Run when Electron preload has finished
app.on('ready', () => {

  window = new BrowserWindow(config)
  devTools = new BrowserWindow();
  window.loadFile(resolve(__dirname, '../../build/index.html'));
  window.webContents.setDevToolsWebContents(devTools.webContents);
  window.webContents.openDevTools();

});

// Run when Electron generates a view
app.on('web-contents-created', (e, contents) => {

  // Prevent _blank from creating new windows
  contents.on('new-window', (e, url) => {
    e.preventDefault();
  });

});

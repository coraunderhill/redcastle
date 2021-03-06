/**
 * @module main
 */

import { BrowserWindow, app } from 'electron';
import { resolve } from 'path';
import init from './init';
import './ipc';

/**
 * @type {Electron.BrowserWindowConstructorOptions}
 */
const config = {
  height: 600,
  minHeight: 304,
  minWidth: 540,
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

  window = new BrowserWindow(config);
  window.loadFile(resolve(__dirname, '../../build/index.html'));
  devTools = new BrowserWindow();
  window.webContents.setDevToolsWebContents(devTools.webContents);
  window.webContents.openDevTools();
  init();

});

// Run when Electron generates a view
app.on('web-contents-created', (e, contents) => {

  // Prevent _blank from creating new windows
  contents.on('new-window', (e, url) => {
    e.preventDefault();
  });

});

// Import Node modules
import {
  BrowserWindow,
  app,
  nativeTheme as theme } from 'electron';
import { startServer } from 'Common/server';

/**
 * Electron BrowserWindow.
 * Referenced early to prevent being eaten by garbage collection
 * @type {BrowserWindow}
 */
let window;

// Create browser window on app ready
app.on('ready', () => {

  // Start local webserver to host app content
  startServer();

  /**
   * Electron window background color. Depends on the current system theme.
   * @type {string}
   * @default
   */
  const bgColor = (theme.shouldUseDarkColors)
    ? '#CC292A2B'
    : '#CCFFFFFF';

  window = new BrowserWindow({
    backgroundColor: bgColor,
    height: 600,
    titleBarStyle: 'hidden',
    transparent: true,
    vibrancy: 'sidebar',
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  })
  .loadURL('http://127.0.0.1:18451/');

});

// Import modules
import { BrowserWindow, app } from 'electron';
import { windowCfg } from './platform';
import { startServer } from './server';

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

  window = new BrowserWindow(windowCfg())
  .loadURL('http://127.0.0.1:18451/');

});

app.on('web-contents-created', (e, contents) => {

  // Prevent _blank from creating new windows
  contents.on('new-window', (e, url) => {
    e.preventDefault();
  });

});

// Import Node modules
import { BrowserWindow, app } from 'electron';
import { startServer } from './common/server';

// Instantiate the window to prevent eaten into memory
let window;

// Create browser window on app ready
app.on('ready', () => {

  // Start local webserver to host app content
  startServer();

  // Create a new app window and load local server
  window = new BrowserWindow({
    height: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  }).loadURL('http://127.0.0.1:18451/');

});

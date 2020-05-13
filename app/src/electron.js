// Import Node modules
import { BrowserWindow, app } from 'electron';

// Instantiate the window to prevent eaten into memory
let window;

// Create browser window on app ready
app.on('ready', () => {
  window = new BrowserWindow({
    height: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  });
  window.loadFile('./index.html');
});

// Import Node modules
const { BrowserWindow, app } = require('electron');

// Instantiate the window to prevent eaten into memory
let window;

// Create browser window on app ready
app.on('ready', () => {
  window = new BrowserWindow({
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  });
  window.loadFile('./index.html');
});

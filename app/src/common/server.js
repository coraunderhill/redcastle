// Import Node modules
import sl from 'server-lite';

/**
 * Starts a local webserver for hosting files
 */
export const startServer = () => {

  // Create the handler and set handler properties
  const handler = new sl.handler();
  handler.concatenateCssFolderPath = '/res/';
  handler.concatenateJavscriptFolderPath = '/res/';
  handler.indexPath = '/index.html';
  handler.webRoot = './app/build';

  /**
   * Handles HTTP requests
   * @param {string} req URL request
   * @param {Object} res Server response object
   */
  const onRequest = (req, res) => {
    handler.simpleFileBasedWebServer(req, res);
  }

  // Set server configuration
  const config = new sl.config({
    onRequest: onRequest,
    port: 18451,
  });

  // Start server with config object
  const server = new sl.server.http(config);
  server.start();

};

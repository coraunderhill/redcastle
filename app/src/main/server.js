// Import modules
import { resolve } from 'path';
import sl from 'server-lite';
import { parse } from 'url';

/**
 * Starts a local webserver for hosting files
 */
export const startServer = () => {

  /**
   * Server utility functions
   */
  const utils = new sl.utils();

  /**
   * Full path to the build directory
   * @type {string}
   * @default
   */
  const build = resolve('./app/build');

  /**
   * Server request handler
   */
  const handler = new sl.handler(utils, build, '/index.html');

  /**
   * Handles HTTP requests
   * @param {string} req URL request
   * @param {Object} res Server response object
   */
  const onRequest = (req, res) => {
    /**
     * Path from request body
     * @type {string}
     * @default
     */
    const path = parse(req.url).pathname;

    /**
     * If the request includes a period, get the requested extension
     * @type {string|null}
     * @default
     */
    const ext = (path.includes('.'))
      ? path.split('.').slice(-1).pop()
      : null;

    /**
     * Full path to file to respond with
     * @type {string}
     * @default
     */
    const file = (ext === null)
      ? `${build}/index.html`
      : `${build}${path}`;

    utils.respondWithFileFromPath(file, res);
  }

  /**
   * Sets the server configuration
   */
  const config = new sl.config({
    onRequest: onRequest,
    port: 18451,
  });

  /**
   * Creates the server object
   */
  const server = new sl.server.http(config);

  // Start the server
  server.start();

};

import React from 'react';
import { render } from 'react-dom';
import { list } from './client';
import { parseQueryString } from './helpers';
import { pushState } from './history';

import Grid from '@components/Grid';
import Theme from '@components/Theme';
import Watch from '@components/Watch';

import pages from '@static/json/pages';

/**
 * @type {Element}
 */
const root = document.getElementById('root');

/**
 * Navigates to a requested page in the app
 * @param {string} location URL path to load
 * @returns {boolean} Result
 */
const goTo = location => {

  /**
   * @type {string[]}
   */
  const parts = location.split('?');

  /**
   * @type {string}
   */
  const path = parts[0];

  // Make sure the page exists first
  if (!(path in pages)) {
    console.error(`Requested path not found: ${path}`);
    return false;
  }

  /**
   * @type {Object|null}
   */
  const queries = (parts.length > 1) ? parseQueryString(parts[1]) : null;

  if (path === '/') grid();
  if (path === '/trending') grid();
  if (path === '/watch') watch(queries.v);

  return true;

}

/**
 * Render a grid of video results
 */
const grid = () => {

  /**
   * Sets the API parameters
   * @type {Object}
   */
  const params = {
    chart: 'mostPopular',
    maxResults: 20,
    part: 'id,snippet',
    regionCode: 'US',
  };

  // Call API and update view
  list(params).then(res => {
    pushState('/');
    render(<Theme><Grid data={res.data} /></Theme>, root);
  });
}

/**
 * Render the Watch component with a selected video
 * @param {string} videoID ID of the video to display
 */
const watch = videoID => {

  /**
   * Sets the API parameters
   * @type {Object}
   */
  const params = {
    id: videoID,
    part: 'snippet,statistics',
  };

  // Call API and update view
  list(params).then(res => {
    /**
     * youtube#video API response object
     * @type {Object}
     */
    const item = res.data.items.shift();

    pushState(`/watch?v=${videoID}`);
    render(<Theme><Watch video={item} /></Theme>, root);
  });

}

export default goTo;

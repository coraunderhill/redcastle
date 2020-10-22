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
const goTo = async location => {

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
    throw new Error(`Requested path not found: ${path}`);
  }

  /**
   * @type {Object|null}
   */
  const queries = (parts.length > 1) ? parseQueryString(parts[1]) : null;

  if (path === '/' || path === '/trending') return grid();
  if (path === '/watch') return watch(queries.v);

}

/**
 * Render a grid of video results
 */
const grid = async () => {

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
  const results = await list(params)
  pushState('/');
  return render(<Theme><Grid data={results.data} /></Theme>, root);
}

/**
 * Render the Watch component with a selected video
 * @param {string} videoID ID of the video to display
 */
const watch = async videoID => {

  /**
   * Sets the API parameters
   * @type {Object}
   */
  const params = {
    id: videoID,
    part: 'snippet,statistics',
  };

  // Call API and update view
  let results = await list(params);

  /**
   * youtube#video API response object
   * @type {Object}
   */
  const item = results.data.items.shift();

  pushState(`/watch?v=${videoID}`);
  return render(<Theme><Watch video={item} /></Theme>, root);
}

export default goTo;

// Import Node modules
import React from 'react';

// Import React components
import List from 'Components/Global/List/List';
import Watch from 'Components/Global/Watch/Watch';

// Import React renderer
import updateView from './renderer';

// Import API client
import { list } from './client';

/**
 * Render the List component with popular videos
 */
export const home = () => {

  /**
   * Sets the API parameters
   * @type {Object}
   */
  const params = {
    chart: 'mostPopular',
    part: 'id,snippet',
    regionCode: 'US',
  };

  // Call API and update view
  list(params).then(res => (
    updateView(<List data={res.data} />, '/')
  ));
}

/**
 * Render the Watch component with a selected video
 * @param {string} videoID ID of the video to display
 */
export const watchVideo = videoID => {

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

    // Deconstruct the video ID for the history URL
    const { id } = item;

    /**
     * URL for using in the history object
     * @type {string}
     * @default
     */
    const url = `/watch?v=${id}`;

    updateView(<Watch data={item} />, url);
  });

}
